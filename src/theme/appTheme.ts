import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#222357',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 50
  },
  text: {
    color: 'white',
    fontSize: 110,
    textAlign: 'right',
    marginBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  textMini: {
    color: '#999',
    fontSize: 30,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'right',
  },
  buttonsRow: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
    marginVertical: 10,
  },
});
