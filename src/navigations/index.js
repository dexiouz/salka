import React, {useReducer, useMemo, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../context/authContext';
import AppNavigator from './AppNavigator/AppNavigator';
import AuthNavigator from './AuthNavigator/AuthNavigator';
import {ROUTES} from '../constants';
import Colors from '../constants/theme';
import PageLoader from '../components/Loader/PageLoader';
import {getToken} from '../utils/storage';
import {IS_DARK} from '../constants/Layouts';
import NoInternet from '../components/NoInternet/NoInternet';

const {Navigator, Screen} = createNativeStackNavigator();
const initialAuthState = {
  isLoading: true,
  token: null,
};

const Routes = () => {
  const netInfo = useNetInfo();
  const {isConnected} = netInfo;
  const theme = useColorScheme();
  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          token: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          token: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          token: null,
          isLoading: false,
        };
    }
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  const authContext = useMemo(
    () => ({
      signIn: async token => {
        try {
          dispatch({type: 'LOGIN', token});
        } catch (e) {
          console.log('error in signIn', e);
        }
      },
      signOut: async () => {
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );
  const retrieveToken = async () => {
    // console.log('retrieving');
    let token = null;
    try {
      token = await getToken();
      // console.log(token, 'token');
      if (token) {
      }
      dispatch({type: 'RETRIEVE_TOKEN', token});
    } catch (error) {
      console.log('error retrieving token', error);
    }
  };

  useEffect(() => {
    // SplashScreen.hide();
    retrieveToken();
  }, []);

  if (authState.isLoading) {
    return <PageLoader />;
  }
  const handleStack = () => {
    if (!isConnected) {
      return <Screen name={ROUTES.NO_INTERNET} component={NoInternet} />;
    } else if (authState.token) {
      return <Screen name={ROUTES.APP_NAVIGATOR} component={AppNavigator} />;
    } else {
      return <Screen name={ROUTES.AUTH_NAVIGATOR} component={AuthNavigator} />;
    }
  };
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer
        theme={theme === 'dark' ? Colors.dark : Colors.light}>
        <Navigator screenOptions={{headerShown: false}}>
          {handleStack()}
        </Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Routes;
