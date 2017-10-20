// @flow
import * as React from 'react';
import {
  auth,
  initializeApp
} from 'firebase';

import './styles';

import {
  ENVIRONMENT,
  FIREBASE_CONFIG as config
} from 'Constants';

import Aux from 'Components/Aux';
import Button from 'Components/Button';
import Name from 'Components/Name';

import HTTP from 'Services/HTTP';

type AppState = {
  button: {
    label: string,
    onClick: Function
  },
  user?: string
};

type FirebaseUser = {
  displayName?: string,
  email?: string,
  emailVerified: boolean,
  isAnonymous: boolean,
  metadata: {
    creationTime?: string,
    lastSignInTime?: string
  },
  phoneNumber?: string,
  photoUrl?: string,
  providerData: Array<{
    displayName?: string,
    email?: string,
    phoneNumber?: string,
    photoUrl?: string,
    providerId: string,
    uid: string
  }>,
  refreshToken: string,
  uid: string
};

const {
  debug,
  error
} = console;

const DEBUG = ENVIRONMENT === 'development';

initializeApp(config);
const provider = new auth.FacebookAuthProvider();

let http;

export default class App extends React.PureComponent<{}, AppState> {
  constructor(): void {
    super();

    (this:any).setToken = this.setToken.bind(this);
    (this:any).handleLogin = this.handleLogin.bind(this);
    (this:any).handleLogout = this.handleLogout.bind(this);
    (this:any).setUser = this.setUser.bind(this);

    this.state = {
      button: {
        label: 'login',
        onClick: this.handleLogin
      },
      user: undefined
    };
  }

  componentDidMount(): void {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setUser(user);
        this.setToken();
      }
    })
  }

  async setToken(): Promise<*> {
    try {
      const Authorization = await auth().currentUser.getIdToken();
      DEBUG && debug(Authorization);
      http = new HTTP('http://dev.api.culturacolectiva.com', {Authorization});

      const test = await http.get('/');
      DEBUG && debug(test);
    } catch (e) {
      error(e);
    }
  }

  async handleLogin(): Promise<*> {
    try {
      const {user} = await auth().signInWithPopup(provider);
      this.setUser(user);
    } catch (e) {
      // We have to handle this properly
      error(e)
    }
  }

  async handleLogout(): Promise<*> {
    try {
      await auth().signOut();
      this.setState({
        user: '',
        button: {
          label: 'login',
          onClick: this.handleLogin
        }
      });
    } catch (e) {
      error(e);
    }
  }

  setUser(firebaseUser: FirebaseUser): void {
    DEBUG && debug(firebaseUser);
    const {displayName: user} = firebaseUser;
    this.setState({
      user,
      button: {
        label: 'logout',
        onClick: this.handleLogout
      }
    });
  }

  render(): React.Element<*> {
    const {
      button,
      user: name
    } = this.state;

    return (
      <Aux>
        <Name {...{name}}/>
        <Button {...button}/>
      </Aux>
    )
  }
}
