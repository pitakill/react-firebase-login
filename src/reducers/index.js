// @flow
import {combineReducers} from 'redux';
import initialState from 'PR/initialState';

type State = {
  user: ?string
};

const getInitialState = (state = initialState, action: ActionInitialState): State => {
  switch(action.type) {
    case 'GET_INITIAL_STATE':
      return Object.assign({}, {...state});
    default:
      return state;
  }
};

// User reducers
const handleUser = (state = initialState, action: ActionSetUser): State => {
  switch(action.type) {
    case 'SET_USER':
      return Object.assign({}, {...state}, {user: action.user});
    default:
      return state;
  }
};

export default combineReducers({
  getInitialState,
  // User reducers
  handleUser
});
