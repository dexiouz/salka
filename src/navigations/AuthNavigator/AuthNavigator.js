import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../constants';
import {STANDARD_HEADER_APP} from '../../components/header/screenOptions';
import CustomHeaderLeft from '../../components/header/CustomHeaderLeft';
import Login from '../../screen/Auth/Login/Login';

const {Navigator, Screen} = createNativeStackNavigator();
const headerLeft = () => <CustomHeaderLeft />;

const AuthNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        ...STANDARD_HEADER_APP,
        headerShown: true,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default AuthNavigator;
