import React from 'react';
import {Provider} from 'react-redux';

import TabNavigator from './navigation/TabNavigator';
import OtpScreen from './OtpAuth/OtpScreen';
import ProductList from './screens/ProductList';

import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      {/* <ProductList /> */}
      <TabNavigator />
    </Provider>
  );
};

export default App;
