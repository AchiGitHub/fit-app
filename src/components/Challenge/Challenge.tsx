import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

function Challenge() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text>Yo!</Text>
        </View>
        <View>
          <Text>Yo!</Text>
        </View>
      </View>
    </View>
  );
}

export default Challenge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  innerContainer: {
    padding: 40,
    flexDirection: 'row',
  },
});
