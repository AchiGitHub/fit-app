/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import RootStackNavigation from './src/navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from './src/_styles/Colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView edges={['bottom']} style={styles.bottomSafeArea}>
        <RootStackNavigation />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
});
