import React from 'react';

import { Alert, StyleSheet, Text, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import { FONT_SIZE_14 } from '../../_styles/Typography';

import ProfilePhoto from './ProfilePhoto';

type Props = {
  uri: string;
  small: boolean;
  // navigation: Object;
};

function ProfilePhotoName({ uri, small, navigation }: Props) {
  return (
    <TouchableNativeFeedback onPress={() => console.log('yoooo')}>
      <View style={styles.userProfile}>
        <ProfilePhoto uri={uri} small={small} />
        <Text style={styles.userName}>Yalla Habibi</Text>
      </View>
    </TouchableNativeFeedback>
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
