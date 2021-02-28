import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

function PostItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View>
          <Video
            source={require('../../../assets/videos/video.mp4')}
            style={styles.video}
            onError={(e): void => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            // paused={paused}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              {/* <Image
                style={styles.profilePicture}
                source={{uri: post.user.imageUri}}
              /> */}

              <TouchableOpacity style={styles.iconContainer}>
                <AntDesign
                  name={'heart'}
                  size={40}
                  color={true ? 'red' : 'white'}
                />
                <Text style={styles.statsLabel}>1,233,422</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>So Beaut</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={35} color="white" />
                <Text style={styles.statsLabel}>12</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@biance</Text>
                <Text style={styles.description}>mmmmmmm</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>Koolios</Text>
                </View>
              </View>

              {/* <Image
                style={styles.songImage}
                source={{uri: post.song.imageUri}}
              /> */}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default PostItem;
