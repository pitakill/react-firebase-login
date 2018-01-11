// @flow
import {ENVIRONMENT} from 'Constants';

const {
  debug,
  error
} = console;

export {debug};
export const DEBUG: boolean = ENVIRONMENT === 'development';
export {error};
