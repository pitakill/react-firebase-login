// @flow
import initialState from 'PR/initialState';

export const getInitialState = (): ActionInitialState => ({
  type: 'GET_INITIAL_STATE', ...initialState
});

// User actions
export const setUser = (user?: string): ActionSetUser => ({
  type: 'SET_USER', user
});
