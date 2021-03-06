import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './reducers';

export const configureStore = () => {
  return createStore(rootReducer, devToolsEnhancer());
};
