import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

function Login() {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  text: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 56,
  },
});

export default Login;
