import initialState from 'PR/initialState';

export const getInitialState = () => ({
  type: 'GET_INITIAL_STATE', ...initialState
});

// User actinos
export const setUser = user => ({
  type: 'SET_USER', user
});
