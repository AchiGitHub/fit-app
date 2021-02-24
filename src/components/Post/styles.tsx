import {StyleSheet, Dimensions} from 'react-native';
import {PADDING_5} from '../../_styles/Typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 130,
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
    bottom: 10,
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
  iconPadding: {
    paddingRight: PADDING_5,
  },
});

export default styles;
