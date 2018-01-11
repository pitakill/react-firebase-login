// @flow
import * as React from 'react';
import {
  auth,
  initializeApp
} from 'firebase';

import './styles';
import {
  FIREBASE_CONFIG as config
} from 'Constants';
import {
  debug,
  DEBUG,
  error
} from 'Helpers';

import Aux from 'Components/Aux';
import Button from 'react-toolbox/lib/button/Button';
import Name from 'Components/Name';

//import HTTP from 'Services/HTTP';

type AppProps = {
  setUser: Function,
  user: string
};

type AppState = {
  button?: {
    label?: string,
    onClick?: Function,
    primary?: boolean,
    raised?: boolean
  },
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

initializeApp(config);
const provider = new auth.FacebookAuthProvider();

//let http;

export default class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    button: {
      label: 'login',
      onClick: this.handleLogin.bind(this),
      primary: true,
      raised: true
    },
    user: undefined
  };

  componentDidMount(): void {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setUser(user);
        //this.setToken();
      }
    })
  }

  //async setToken(): Promise<*> {
    //try {
      //const Authorization = await auth().currentUser.getIdToken();
      //DEBUG && debug(Authorization);
      //http = new HTTP('http://dev.api.culturacolectiva.com', {Authorization});

      //const test = await http.get('/');
      //DEBUG && debug(test);
    //} catch (e) {
      //error(e);
    //}
  //}

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
      this.props.setUser(null);
      this.setState(prevState => {
        const button = Object.assign(
          {},
          prevState.button,
          {
            label: 'login',
            onClick: this.handleLogin.bind(this)
          }
        );

        return Object.assign(prevState, {button});
      });
    } catch (e) {
      error(e);
    }
  }

  setUser(firebaseUser: FirebaseUser): void {
    DEBUG && debug(firebaseUser);
    const {displayName: user} = firebaseUser;

    this.props.setUser(user);

    this.setState(prevState => {
      const button = Object.assign(
        {},
        prevState.button,
        {
          label: 'logout',
          onClick: this.handleLogout.bind(this)
        }
      );

      return Object.assign(prevState, {button});
    });
  }

  render(): React.Element<*> {
    const {button} = this.state;
    const {user: name} = this.props;

    return (
      <Aux>
        <Name {...{name}}/>
        <Button {...button}/>
      </Aux>
    )
  }
}
