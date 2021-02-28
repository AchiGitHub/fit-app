import React from 'react';
import {StyleSheet, View} from 'react-native';

// import {Text} from 'react-native';
import PostItem from '../components/Post/PostItem';

function Home(): JSX.Element {
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <View style={styles.container}>
      <PostItem />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});
