import React from 'react';
import {Dimensions, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import {Text} from 'react-native';
import PostItem from '../components/Post/PostItem';

function Home() {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <PostItem />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 130}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Home;
