import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

function PostChallenge() {
  return (
    <View style={styles.challengeName}>
      <Text numberOfLines={2} style={styles.challengeNameText}>
        100 Pushups in 10 minutes
      </Text>
    </View>
  );
}

export default PostChallenge;

const styles = StyleSheet.create({
  challengeName: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(217, 217, 217, 0.7)',
    padding: 15,
  },
  challengeNameText: {
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
