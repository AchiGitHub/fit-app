import {StyleSheet, Dimensions} from 'react-native';
import {SECONDARY_COLOR} from '../../_styles/Colors';
import {FONT_SIZE_14, PADDING_5} from '../../_styles/Typography';

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
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'flex-end',
  },
  likeContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  rankContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  challengeName: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(217, 217, 217, 0.7)',
    padding: 15,
  },
  challengeNameText: {
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
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
  userProfile: {
    flexDirection: 'row',
  },
  userName: {
    marginTop: 8,
    marginLeft: 8,
    fontSize: FONT_SIZE_14,
    fontWeight: '600',
    color: 'white',
  },
  numberOfLikes: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
