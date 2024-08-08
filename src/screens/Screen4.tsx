import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../theme/appTheme';
import { BodyComponent } from '../../components/BodyComponent';

interface FormLogin {
  numero1: string;
  numero2: string;
}

export const Screen4 = () => {
  const [formLogin, setFormLogin] = useState<FormLogin>({
    numero1: '',
    numero2: ''
  });
  const [resultado, setResultado] = useState<string>('');

  const handleSetValue = (key: keyof FormLogin, value: string) => {
    setFormLogin(prevFormLogin => ({
      ...prevFormLogin,
      [key]: value
    }));
  };

  const handle = () => {
    const num1 = parseFloat(formLogin.numero1);
    const num2 = parseFloat(formLogin.numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Por favor ingresa números válidos.');
    } else if (num1 >= num2) {
      setResultado(`El número mayor es: ${num1} ,${num2}`);
      setResultado('Ambos números son iguales.');
    } else {
        setResultado(null); 
      }
    };
  

  return (
    <View style={styles.contentBody}>
      <BodyComponent>
        <Text style={styles.titleHeaderBody}>FORMULARIO</Text>

        <View style={styles.contentInput}>
          <TextInput
            style={styles.inputText}
            placeholder="Ingresa el número "
            keyboardType="numeric"
            value={formLogin.numero1}
            onChangeText={(text) => handleSetValue('numero1', text)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Ingresa el número "
            keyboardType="numeric"
            value={formLogin.numero2}
            onChangeText={(text) => handleSetValue('numero2', text)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttonText}>{'>='}</Text>
        </TouchableOpacity>

        {resultado ? (
          <Text style={styles.globalTitle}>{resultado}</Text>
        ) : null}
      </BodyComponent>
    </View>
  );
};

