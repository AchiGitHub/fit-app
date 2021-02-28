import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

function Login() {
  return (
    <View style={styles.loginContainer}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default Login;
