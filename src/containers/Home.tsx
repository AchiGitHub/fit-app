import React from 'react';
import {Dimensions, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import {Text} from 'react-native';
import PostItem from '../components/Post/PostItem';
import {PRIMARY_COLOR} from '../_styles/Colors';

function Home() {
  return (
    <View style={{backgroundColor: PRIMARY_COLOR}}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <PostItem />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 50}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Home;
