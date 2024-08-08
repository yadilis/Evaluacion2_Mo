import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const InputComponent = ({ placeholder, value, onChangeText }:Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType="numeric"
            value={value}
            onChangeText={onChangeText}
            style={styles.inputText}
        />
    );
};


