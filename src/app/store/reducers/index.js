import { combineReducers } from 'redux';

import eventReducer from './event';
import modalReducer from './modal';
import authReducer from './auth';

const rootReducer = combineReducers({
  event: eventReducer,
  modal: modalReducer,
  auth: authReducer,
});

export default rootReducer;
