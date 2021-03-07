import React from 'react';

import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';
import FollowBtn from '../../components/Follow/FollowBtn';

import PostLikes from '../../components/Post/PostLikes';
import ProfileNumbers from '../../components/ProfileView/ProfileNumbers';
import ProfileView from '../../components/ProfileView/ProfileView';

const { width, height } = Dimensions.get('window');

function Profile() {
  return (
    <>
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.profilePhoto}>
            <ProfileView />
          </View>
          <View style={styles.numbersContainer}>
            <ProfileNumbers name="Challenges" value="40" />
            <ProfileNumbers name="Likes" value="9.8M" />
            <ProfileNumbers name="Followers" value="10.8M" />
          </View>
          <View style={styles.followSlot}>
            <FollowBtn />
          </View>
          <View style={styles.postsContainer}>
            {posts.map((post, idx) => {
              return (
                <View
                  key={idx}
                  style={[
                    styles.imageContainer,
                    // eslint-disable-next-line react-native/no-inline-styles
                    idx % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
                  ]}>
                  <Video
                    source={require('../../../assets/videos/video.mp4')}
                    style={styles.videoContainer}
                    resizeMode={'cover'}
                    paused={true}
                    repeat={true}
                  />
                  <View style={styles.likesContainer}>
                    <PostLikes
                      iconColor="#ccc"
                      numberOfLikes="7.2k"
                      iconSize={16}
                      flexRow={true}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  profilePhoto: {
    alignItems: 'center',
    marginTop: height * 0.05
  },
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  postsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imageContainer: {
    width: width / 3,
    height: width / 1.5,
    marginBottom: 2
  },
  likesContainer: {
    position: 'absolute',
    bottom: 0,
    left: 5
  },
  videoContainer: {
    flex: 1
  },
  followSlot: {
    marginTop: 20,
    alignItems: 'center'
  }
});

const posts = [1, 2, 3, 4, 5, 6, 7];
