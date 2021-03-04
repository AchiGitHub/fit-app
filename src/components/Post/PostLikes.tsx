import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  iconColor: string;
  iconSize: number;
  numberOfLikes: string;
  flexRow: boolean;
};

function PostLikes({iconColor, iconSize, numberOfLikes, flexRow}: Props) {
  return (
    <View
      style={[
        styles.likeContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        flexRow === true ? {flexDirection: 'row'} : {},
      ]}>
      <AntDesign name={'heart'} size={iconSize} color={iconColor} />
      <Text style={styles.numberOfLikes}>{numberOfLikes}</Text>
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
