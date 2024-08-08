
import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../commons/constants';
import { Screen1 } from '../src/screens/Screen1';
import { Screen2 } from '../src/screens/Screen2';
import { Screen3 } from '../src/screens/Screen3';
import { Screen4 } from '../src/screens/Screen4';
import { Screen5 } from '../src/screens/Screen5';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      cardStyle:{
        backgroundColor:PRIMARY_COLOR
      }
    }}>
    
      <Stack.Screen name="Screen1" options={{headerShown:false}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{headerShown:false}} component={Screen2} />
      <Stack.Screen name="Screen3" options={{headerShown:false}} component={Screen3} />
      <Stack.Screen name="Screen4" options={{headerShown:false}} component={Screen4} />
      <Stack.Screen name="Screen5" options={{headerShown:false}} component={Screen5} />
    
    </Stack.Navigator>
  );
};

