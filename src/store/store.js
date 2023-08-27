import {configureStore} from '@reduxjs/toolkit';
import AppReducers from './reducers/index';

export const store = configureStore({
  reducer: AppReducers,
});

export default store;
