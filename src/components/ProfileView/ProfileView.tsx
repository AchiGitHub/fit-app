import React from 'react';

import { StyleSheet, Text } from 'react-native';

import { FONT_SIZE_22 } from '../../_styles/Typography';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

function ProfileView() {
  return (
    <>
      <ProfilePhoto
        small={false}
        uri="https://images.unsplash.com/photo-1551833726-b6549cd73566?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
      />
      <Text style={styles.profileName}>Lauren Wood</Text>
      <Text>Kunda Jota 🍆💦</Text>
      <Text>Kandy, Srilanka</Text>
    </>
  );
}

export default ProfileView;

const styles = StyleSheet.create({
  profileName: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_22
  }
});
