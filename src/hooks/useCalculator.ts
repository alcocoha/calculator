import { useState, useRef } from "react";
enum Operators {
    sum,
    rest,
    multiply,
    divide,
}

const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [numberReference, setNumberReference] = useState('0');
    const operationRef = useRef<Operators>();

    const cleanNumber = () => {
        setNumberReference('0');
        setNumber('0');
    };

    const calcular = () => {
        const num1 = Number(number);
        const num2 = Number(numberReference);

        switch (operationRef.current) {
            case Operators.sum:
            setNumber(`${num1 + num2}`);
            break;
            case Operators.rest:
            setNumber(`${num2 - num1}`);
            break;
            case Operators.multiply:
            setNumber(`${num1 * num2}`);
            break;
            case Operators.divide:
            setNumber(`${num2 / num1}`);
            break;
            default:
            break;
        }
        setNumberReference('0');
    };

    const makeNumber = (numInput: string) => {
        if (number.includes('.') && numInput === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numInput === '.') {
            setNumber(number + numInput);
            } else if (numInput === '0' && number.includes('.')) {
            setNumber(number + numInput);
            } else if (numInput !== '0' && !number.includes('.')) {
            setNumber(numInput);
            } else if (numInput === '0' && !number.includes('.')) {
            setNumber(number);
            } else {
            setNumber(number + numInput);
            }
        } else {
            setNumber(number + numInput);
        }
    };

    const switchPositiveToNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    const deleteNumber = () => {
        let negativeStr = '';
        let temporalNumber = number;
        if (number.includes('-')) {
            negativeStr = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            setNumber(negativeStr + temporalNumber.slice(0, -1));
        } else {
            setNumber('0');
        }
    };

    const handleNumberReference = () => {
        if (number.endsWith('.')) {
            setNumberReference(number.slice(0, -1));
        } else {
            setNumberReference(number);
        }
        setNumber('0');
    };

    const btnSum = () => {
        handleNumberReference();
        operationRef.current = Operators.sum;
    };

    const btnRest = () => {
        handleNumberReference();
        operationRef.current = Operators.rest;
    };

    const btnMiltiply = () => {
        handleNumberReference();
        operationRef.current = Operators.multiply;
    };

    const btnDivide = () => {
        handleNumberReference();
        operationRef.current = Operators.divide;
    };
    return {
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
        btnDivide
    };
}

export default useCalculator
