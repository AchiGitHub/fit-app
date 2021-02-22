import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import VideoSlot from './VideoSlot';

function PostItem() {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <TouchableOpacity
          onPress={() => console.log('clicked')}
          style={styles.infoWrapper}>
          <FastImage
            style={styles.avatar}
            source={{
              uri:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            }}
          />
          <Text style={styles.userName}>Lauren Wood</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('redirect')}>
          {/* <Icons name="dots-vertical" size={24} /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <VideoSlot />
      </View>
      <View style={styles.reactionsWrapper}>
        <View style={styles.reactions}>
          <View style={styles.lReactions}>
            {/* <TouchableOpacity onPress={_toggleLikePost}> */}
            {/* <Icons name={isLiked
                                ? "heart" : "heart-outline"}
                                size={24}
                                color={
                                    isLiked ? 'red' : '#000'
                                } /> */}
            {/* </TouchableOpacity> */}
            <Text>Hey</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // borderTopColor: '#ddd',
    // borderTopWidth: 0.5,
    // borderBottomColor: '#ddd',
    // borderBottomWidth: 0.5,
    backgroundColor: '#fff',
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    // overflow: 'hidden',
    alignItems: 'center',
  },
  bookmarkAddionNotification: {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    width: '100%',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    bottom: -44,
    left: 0,
  },
  btnGoToSaved: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarkPreviewImage: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  avatar: {
    borderColor: '#ddd',
    borderWidth: 0.3,
    height: 36,
    width: 36,
    borderRadius: 36,
    marginRight: 10,
  },
  reactionsWrapper: {
    padding: 10,
  },
  reactions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lReactions: {
    flexDirection: 'row',
    width: 24.3 * 3 + 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnViewCmt: {
    marginVertical: 5,
  },
  commentInputWrapper: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  commentIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 14.3 * 3 + 15,
  },
  commentAvatar: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  userName: {
    fontWeight: '600',
  },
});
