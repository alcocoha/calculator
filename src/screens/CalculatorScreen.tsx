import React, {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import ButtonCircle from '../components/ButtonCircle';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    number,
    numberReference,
    cleanNumber,
    calcular,
    makeNumber,
    deleteNumber,
    switchPositiveToNegative,
    btnSum,
    btnRest,
    btnMiltiply,
    btnDivide,
  } = useCalculator();

  return (
    <View>
      {numberReference !== '0' && (
        <Text style={styles.textMini}>{numberReference}</Text>
      )}
      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View>
        <View style={styles.buttonsRow}>
          <ButtonCircle title="C" action={cleanNumber} />
          <ButtonCircle title="+/-" action={switchPositiveToNegative} />
          <ButtonCircle title="del" action={deleteNumber} />
          <ButtonCircle title="/" colorText="#f48a08" action={btnDivide} />
        </View>
        <View style={styles.buttonsRow}>
          <ButtonCircle title="7" action={makeNumber} />
          <ButtonCircle title="8" action={makeNumber} />
          <ButtonCircle title="9" action={makeNumber} />
          <ButtonCircle title="X" colorText="#f48a08" action={btnMiltiply} />
        </View>
        <View style={styles.buttonsRow}>
          <ButtonCircle title="4" action={makeNumber} />
          <ButtonCircle title="5" action={makeNumber} />
          <ButtonCircle title="6" action={makeNumber} />
          <ButtonCircle title="-" colorText="#f48a08" action={btnRest} />
        </View>
        <View style={styles.buttonsRow}>
          <ButtonCircle title="1" action={makeNumber} />
          <ButtonCircle title="2" action={makeNumber} />
          <ButtonCircle title="3" action={makeNumber} />
          <ButtonCircle title="+" colorText="#f48a08" action={btnSum} />
        </View>
        <View style={styles.buttonsRow}>
          <ButtonCircle size="md" action={makeNumber} />
          <ButtonCircle title="." action={makeNumber} />
          <ButtonCircle title="=" colorText="#f48a08" action={calcular} />
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
