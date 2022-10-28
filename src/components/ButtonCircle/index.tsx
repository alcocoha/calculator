import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface Props {
  size?: string;
  title?: string;
  action: (num: string) => void | undefined;
  colorText?: string;
}

const ButtonCircle = ({
  size = 'sm',
  title = '0',
  action,
  colorText = 'white',
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(title)}>
      <View style={styles.button(size)}>
        <Text style={styles.buttonText(colorText)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCircle;
