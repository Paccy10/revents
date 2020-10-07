import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './app/layout/App';
import ScrollToTop from './app/layout/ScrollToTop';
import './app/layout/styles.css';
import { configureStore } from './app/store/config';

const store = configureStore();

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
