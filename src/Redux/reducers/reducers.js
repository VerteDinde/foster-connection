import * as actions from '../constants';
import { combineReducers } from 'redux';

function user(state = false, action) {
  switch (action.type) {
    case actions.LOGIN:
      return action.payload;
    case actions.LOGOUT:
      return null;
    default:
      return state;
  }
}

function locations(state = [], action) {
  switch (action.type) {
    case actions.ADD_LOCATION:
      return action.payload;
    case actions.REMOVE_LOCATION:
      return null;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  locations
});

export default rootReducer;