/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
} from 'react-native/Libraries/NewAppScreen';
import HomeNavigator from './src/navigations/HomeStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';


const App = () => {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <HomeNavigator></HomeNavigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
