import AsyncStorage from '@react-native-async-storage/async-storage';
const USER_DETAILS = 'USER_DETAILS';
const TOKEN = 'TOKEN';

export const saveUserInformation = async data => {
  try {
    await AsyncStorage.setItem(USER_DETAILS, JSON.stringify(data));
  } catch (err) {
    console.log('err', err);
  }
};

export const getUserStorageInformation = async () => {
  try {
    const data = await AsyncStorage.getItem(USER_DETAILS);
    return data !== null ? JSON.parse(data) : null;
  } catch (err) {
    console.log(err);
  }
};

export const setToken = async token => {
  try {
    await AsyncStorage.setItem(TOKEN, token);
  } catch (err) {
    console.log('err', err);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    return token !== null ? token : null;
  } catch (err) {
    console.log(err);
  }
};
