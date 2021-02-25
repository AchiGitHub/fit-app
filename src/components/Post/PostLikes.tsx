import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function PostLikes() {
  return (
    <View style={styles.likeContainer}>
      <AntDesign name={'heart'} size={38} color={'red'} />
      <Text style={styles.numberOfLikes}>7.2k</Text>
    </View>
  );
}

export default PostLikes;

const styles = StyleSheet.create({
  numberOfLikes: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  likeContainer: {
    alignItems: 'center',
    paddingRight: 10,
  },
});
