import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Input, Text, ThemeProvider} from 'react-native-elements';
import {textStyle, theme, buttonStyle, imageStyle} from '@styles'

export default Home = ({ route ,navigation }) =>{
  
  return(
    <ThemeProvider theme ={theme} >
        <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
            <Text>Loggin Successfull!</Text>
            <Text>Welcome to the Home screen!</Text>
        </View>
    </ThemeProvider>

  );
}