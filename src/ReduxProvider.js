import React from 'react';
import {Provider} from 'react-redux';


import App from './App';
import store from './Redux/store';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxProvider;