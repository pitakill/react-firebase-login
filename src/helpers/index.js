import {ENVIRONMENT} from 'Constants';

const {
  debug,
  error
} = console;

export {debug};
export const DEBUG = ENVIRONMENT === 'development';
export {error};
