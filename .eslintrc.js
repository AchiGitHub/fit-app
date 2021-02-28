module.exports = {
  root: true,
  extends: 'react-native-wcandillon',
  rules: {
    quotes: [2, 'single', {avoidEscape: true}],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
