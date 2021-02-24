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
    width: '80%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderRadius: 30,
    backgroundColor: 'rgba(217, 217, 217, 0.7)',
  },
  likeContainer: {
    flexDirection: 'row',
  },
  challengeName: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
  },
  challengeNameText: {
    fontWeight: '600',
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
});

export default styles;
