import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { FONT_SIZE_14 } from '../../_styles/Typography';

import ProfilePhoto from './ProfilePhoto';

type Props = {
  uri: string;
  small: boolean;
};

function ProfilePhotoName({ uri, small }: Props) {
  return (
    <View style={styles.userProfile}>
      <ProfilePhoto uri={uri} small={small} />
      <Text style={styles.userName}>Yalla Habibi</Text>
    </View>
  );
}

export default ProfilePhotoName;

const styles = StyleSheet.create({
  userProfile: {
    flexDirection: 'row'
  },
  userName: {
    marginTop: 8,
    marginLeft: 8,
    fontSize: FONT_SIZE_14,
    fontWeight: '600',
    color: 'white'
  }
});
