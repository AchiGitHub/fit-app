import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

function PostRank() {
  return (
    <View style={styles.rankContainer}>
      <MaterialCommunityIcons name={'leaderboard'} size={40} color={'green'} />
      <Text style={styles.rankNumber}>25</Text>
    </View>
  );
}

export default PostRank;

const styles = StyleSheet.create({
  rankContainer: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  rankNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
