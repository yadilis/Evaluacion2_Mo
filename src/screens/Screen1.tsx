import React from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../../commons/constants';
import { TitleConponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';

interface Props extends StackScreenProps<any, any> {}

    export const Screen1 = ({ navigation }: Props) => {
        return (


            <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleConponent title='Inicio' />

               <BodyComponent>
              <Text style={styles.titleHeaderBody}>Bienvenido</Text>
      
            
              
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
                    <Text style={styles.buttonText}>Imagen 1</Text>
                </TouchableOpacity>
                
               
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen3')}>
                    <Text style={styles.buttonText}>Imagen 2</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen4')}>
                    <Text style={styles.buttonText}> {'>='} </Text>
                </TouchableOpacity>
                
        
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen5')}>
                    <Text style={styles.buttonText}>{'<='}</Text>
                </TouchableOpacity>
            
            </BodyComponent>
  </View>
        );
      };
