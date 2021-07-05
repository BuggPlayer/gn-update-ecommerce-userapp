import React from 'react';
import {Provider} from 'react-redux';
import TabNavigator from './navigation/TabNavigator';
import CheckOutScreen from './screens/CheckOutScreen';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      {/* <CheckOutScreen /> */}
      <TabNavigator />
    </Provider>
  );
};

export default App;
