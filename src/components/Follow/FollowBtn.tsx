import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FollowBtn() {
  const [following, setfollowing] = useState(false);
  return (
    <TouchableOpacity onPress={() => setfollowing(!following)}>
      <View style={following ? styles.unfollowBtn : styles.followBtn}>
        <Text style={following ? styles.unfollowBtnText : styles.followBtnText}>
          {following ? 'Following' : 'Follow'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default FollowBtn;

const styles = StyleSheet.create({
  followBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#1778F2',
    borderRadius: 5
  },
  followBtnText: {
    color: '#fff',
    fontWeight: '600'
  },
  unfollowBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  unfollowBtnText: {
    color: '#000',
    fontWeight: '600'
  }
});
