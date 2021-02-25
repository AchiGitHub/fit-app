import React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileNumbers from '../../components/ProfileView/ProfileNumbers';
import ProfileView from '../../components/ProfileView/ProfileView';

const {height} = Dimensions.get('window');

function Profile() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.profilePhoto}>
          <ProfileView />
        </View>
        <View style={styles.numbersContainer}>
          <ProfileNumbers name="Challenges" value="40" />
          <ProfileNumbers name="Likes" value="9.8M" />
        </View>
      </SafeAreaView>
    </>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profilePhoto: {
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});
