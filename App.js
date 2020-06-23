/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Nav from './Nav';

const App = () => {
  // <> </> 是 fragment 写法，不是写错
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Nav />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
