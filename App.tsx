import 'react-native-gesture-handler';
import React from 'react';

import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {PRIMARY_COLOR} from './src/_styles/Colors';
import RootStackNavigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
