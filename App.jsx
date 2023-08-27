import React from 'react';
import {StyleSheet, LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/store/store';
import Routes from './src/navigations';
import TaskProvider from './src/context/TaskContext';

LogBox.ignoreLogs(['ViewPropTypes', 'new NativeEventEmitter']);

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <TaskProvider>
        <Provider store={store}>
          <Routes />
          <FlashMessage position="top" />
        </Provider>
      </TaskProvider>
    </GestureHandlerRootView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
