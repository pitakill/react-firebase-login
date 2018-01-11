// @flow
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Chip from 'react-toolbox/lib/chip/Chip';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme'
import './toolbox/theme.css';
import './styles.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from 'Actions';

const root = document.getElementById('root')

type WrapperProps = {
  actions: {
    getInitialState: Function,
    setUser: Function
  },
  user?: string
}

class WrapperWithoutRedux extends React.Component<WrapperProps, void> {
  componentWillMount() {
    this.props.actions.getInitialState();
  }

  render() {
    const {
      actions: {
        setUser
      },
      user
    } = this.props;

    return (
      <div>
        <Chip className="floating">{user}</Chip>
        <App {...{setUser, user}}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.getInitialState,
    ...state.handleUser
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrapperWithoutRedux);

if (root instanceof HTMLElement) {
  render(
    <Provider {...{store}}>
      <ThemeProvider {...{theme}}>
        <Wrapper />
      </ThemeProvider>
    </Provider>
    , root
  );
  registerServiceWorker();
}
