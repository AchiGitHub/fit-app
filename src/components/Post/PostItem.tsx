import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Video from 'react-native-video';

import ProfilePhotoName from '../ProfilePhoto/ProfilePhotoName';

import PostChallenge from './PostChallenge';
import PostLikes from './PostLikes';
import PostRank from './PostRank';
import styles from './styles';

function PostItem() {
  //get the safe area heights
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Video
        source={require('../../../assets/videos/video.mp4')}
        style={styles.video}
        onError={(e) => console.log(e)}
        resizeMode={'cover'}
        repeat={true}
        paused={false}
      />
      <View style={styles.userSlot}>
        <ProfilePhotoName
          uri="https://images.unsplash.com/photo-1551833726-b6549cd73566?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          small={true}
        />
      </View>
      <View style={styles.tryChallenge}>
        <Text style={styles.challengeText}>Try it!</Text>
      </View>
      <View style={styles.uiContainer}>
        <View
          style={[
            styles.bottomContainer,
            // eslint-disable-next-line react-native/no-inline-styles
            { bottom: insets.top !== 0 ? insets.top : 15 }
          ]}>
          <PostLikes
            iconColor="red"
            numberOfLikes="7.2k"
            iconSize={38}
            flexRow={false}
          />
          <PostChallenge />
          <PostRank />
        </View>
      </View>
    </View>
  );
}

export default PostItem;
