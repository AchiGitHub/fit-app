import {StyleSheet, Dimensions} from 'react-native';

import {SECONDARY_COLOR} from '../../_styles/Colors';
import {PADDING_5} from '../../_styles/Typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 50,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  likeContainer: {
    alignItems: 'center',
    paddingRight: 10,
  },
  iconPadding: {
    paddingRight: PADDING_5,
  },
  userSlot: {
    position: 'absolute',
    top: '5%',
    left: 10,
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: SECONDARY_COLOR,
  },
  tryChallenge: {
    position: 'absolute',
    right: 10,
    top: '5%',
    backgroundColor: '#E7357B',
    borderRadius: 20,
  },
  challengeText: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
