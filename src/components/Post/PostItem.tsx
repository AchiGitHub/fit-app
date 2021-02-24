import React from 'react';
import {Image, Text, View} from 'react-native';
import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

function PostItem() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/video.mp4')}
        style={styles.video}
        onError={(e) => console.log(e)}
        resizeMode={'cover'}
        repeat={true}
        paused={false}
      />
      <View style={styles.userSlot}>
        <View style={styles.userProfile}>
          <Image
            style={styles.profilePicture}
            source={{
              uri:
                'https://images.unsplash.com/photo-1551833726-b6549cd73566?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            }}
          />
          <Text style={styles.userName}>Yalla Habibi</Text>
        </View>
      </View>
      <View style={styles.uiContainer}>
        <View
          style={[
            styles.bottomContainer,
            {bottom: insets.top !== 0 ? insets.top : 15},
          ]}>
          <View style={styles.likeContainer}>
            <AntDesign
              name={'heart'}
              size={15}
              color={'red'}
              style={styles.iconPadding}
            />
            <Text>7.2k</Text>
          </View>
          <View style={styles.challengeName}>
            <Text numberOfLines={2} style={styles.challengeNameText}>
              100 Pushups in 10 minutes
            </Text>
          </View>
          <View style={styles.likeContainer}>
            <MaterialCommunityIcons
              name={'leaderboard'}
              size={15}
              color={'green'}
              style={styles.iconPadding}
            />
            <Text>25</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PostItem;
