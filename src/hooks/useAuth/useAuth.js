import React, {useContext} from 'react';
import {AuthContext} from '../../context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** 
This hook handles every API for authentication
**/
const useAuth = () => {
  const {signOut, signIn} = useContext(AuthContext);

  const handleSignOut = async () => {
    const handleClearAsyncStorage = async () => {
      const asyncStorageKeys = await AsyncStorage.getAllKeys();
      if (asyncStorageKeys.length > 0) {
        await AsyncStorage.multiRemove(asyncStorageKeys);
      }
    };
    try {
      await handleClearAsyncStorage();
      await signOut();
    } catch (error) {
      console.log(' sign out error', error);
    }
  };
  return {
    signIn,
    handleSignOut,
  };
};

export default useAuth;
