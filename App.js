import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './navigation';
import TabNavigator from './navigation/TabNavigator';
import EnterOtp from './OtpAuth/EnterOtp';
import GetOtp from './OtpAuth/GetOtp';
import OtpPhoneNo from './OtpAuth/OtpPhoneNo';
import OnBoaredScreens from './screens/OnBoaredScreens';
import SplashScreen from './screens/SplashScreen';

import ThankuPage from './screens/ThankuPage';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
      {/* <GetOtp /> */}
      {/* <TabNavigator /> */}
    </Provider>
  );
};

export default App;
