import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT_SIZE_25} from '../../_styles/Typography';

type Props = {
  value: string;
  name: string;
};

function ProfileNumbers({name, value}: Props) {
  return (
    <View style={styles.slot}>
      <Text style={styles.numberText}>{value}</Text>
      <Text style={styles.context}>{name}</Text>
    </View>
  );
}

export default ProfileNumbers;

const styles = StyleSheet.create({
  slot: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: FONT_SIZE_25,
    fontWeight: 'bold',
  },
  context: {
    color: '#bdbdbd',
    fontSize: 16,
    fontWeight: '600',
  },
});
