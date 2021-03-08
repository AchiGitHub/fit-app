import React from 'react';

import { Dimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// import {Text} from 'react-native';
import { PRIMARY_COLOR } from '../../_styles/Colors';
import PostItem from '../../components/Post/PostItem';

function Feed({ navigation }) {
  return (
    <View style={{ backgroundColor: PRIMARY_COLOR }}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <PostItem navigation={navigation} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 50}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Feed;
