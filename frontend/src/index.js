

import React from 'react';
import {View,Text, YellowBox} from 'react-native';
//import { Input } from 'react-native-elements';
import {HelloWorld} from '@molecules';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import theme from '@styles'
import {Login, Register, Home} from '@screens'

const Stack = createStackNavigator();
YellowBox.ignoreWarnings([
  'Require cycle:'
])
export default function SrcApp(){

  return(
    <NavigationContainer>
    
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>

  </NavigationContainer>
  );
};


