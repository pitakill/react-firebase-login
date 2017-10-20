// @flow
import React from 'react';
import {render} from 'react-dom';
import './styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root')

if (root instanceof HTMLElement) {
  render(<App />, root);
  registerServiceWorker();
}
