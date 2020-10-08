import { combineReducers } from 'redux';

import eventReducer from './event';
import modalReducer from './modal';

const rootReducer = combineReducers({
  event: eventReducer,
  modal: modalReducer,
});

export default rootReducer;
