// @flow
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Chip from 'react-toolbox/lib/chip/Chip';
import registerServiceWorker from './registerServiceWorker';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme'
import './toolbox/theme.css';
import './styles.css';

const root = document.getElementById('root')

if (root instanceof HTMLElement) {
  render(
    <ThemeProvider {...{theme}}>
      <div>
        <Chip className="floating">Test</Chip>
        <App/>
      </div>
    </ThemeProvider>,
    root
  );
  registerServiceWorker();
}
