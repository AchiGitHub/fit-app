import React from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

function VideoSlot() {
  return (
    <ImageBackground
      source={{
        uri:
          'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      }}
      blurRadius={20}
      style={{
        // height: maxImageHeight,
        width: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <FastImage
          style={{
            width: SCREEN_WIDTH - 30,
            height: SCREEN_WIDTH - 30,
            borderRadius: 10,
          }}
          source={{
            uri:
              'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          }}
        />
      </View>
    </ImageBackground>
  );
}

export default VideoSlot;
