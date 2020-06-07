import React from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import {App} from './app/index';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
