import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Challenge from '../../components/Challenge/Challenge';

function Challenges() {
  return (
    <SafeAreaView style={styles.container}>
      <Challenge />
    </SafeAreaView>
  );
}

export default Challenges;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
