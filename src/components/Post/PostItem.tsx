import React from 'react';
import {Text, View} from 'react-native';
import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

function PostItem() {
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
      <View style={styles.uiContainer}>
        <View style={styles.bottomContainer}>
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
            <Text numberOfLines={2}>100 Pushups in 10 minutes</Text>
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
