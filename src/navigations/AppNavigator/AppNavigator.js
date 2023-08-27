import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../constants';
import Tasks from '../../screen/App/Tasks/Tasks';

const {Navigator, Screen} = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.TASKS}>
      <Screen
        options={{
          headerShown: false,
        }}
        name={ROUTES.TASKS}
        component={Tasks}
      />
    </Navigator>
  );
};

export default AppNavigator;
