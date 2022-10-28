import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

// interface StylesProps {
//   size?: string;
//   color?: string;
// }
// interface StyleSheetType {
//   button: ViewStyle;
//   buttonText: TextStyle;
// }

// type StylesFunctionProps = (props: StylesProps) => StyleSheetType;

// export const styles: StylesFunctionProps = ({size, color}) =>
//   StyleSheet.create<StyleSheetType>({
//     button: {
//       width: size === 'sm' ? 80 : 180,
//       height: 80,
//       backgroundColor: color,
//       borderRadius: 100,
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginHorizontal: 10,
//     },
//     buttonText: {
//       color: 'white',
//       fontSize: 30,
//     },
//   });

export const styles = StyleSheet.create({
  button: (size: string) => ({
    width: size === 'sm' ? 60 : 140,
    height: 60,
    backgroundColor: '#222357',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  }),
  buttonText: (colorText: string) => ({
    color: colorText,
    fontSize: 22,
    fontWeight: 'bold',
  }),
});
