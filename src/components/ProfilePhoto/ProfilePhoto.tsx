import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {SECONDARY_COLOR} from '../../_styles/Colors';

type Props = {
  uri: string;
  small: boolean;
};

function ProfilePhoto({uri, small}: Props) {
  return (
    <Image
      style={
        small === true ? styles.largeProfilePicture : styles.smallProfilePicture
      }
      source={{
        uri: uri,
      }}
    />
  );
}

export default ProfilePhoto;

const styles = StyleSheet.create({
  smallProfilePicture: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: SECONDARY_COLOR,
  },
  largeProfilePicture: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: SECONDARY_COLOR,
  },
});
