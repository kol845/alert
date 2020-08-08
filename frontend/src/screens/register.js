import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Text, ThemeProvider} from 'react-native-elements';
//const UbuntBut = (props) => <Button raised {...props} buttonStyle={styles.signUpButton}/>;
import {InputField} from '@molecules'
import {textStyle, theme, buttonStyle, imageStyle} from '@styles'

import background from '@assets/images/register_background_v1.jpg'

export default Register = ({ route ,navigation }) =>{
  function changeScreen(nextScreen){
    navigation.navigate(nextScreen)
  }
  return(
    <ThemeProvider theme ={theme} >
    <ImageBackground source = {background} style={imageStyle.backgroundImage}/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
          <InputField placeholder="Username" icon="user"/>
          <InputField placeholder="Password" icon="key" password={true}/>
          <InputField placeholder="Reenter password" icon="key" password={true}/>
          <Button buttonStyle = {buttonStyle.registerButton}title="Sign up" onPress={()=>alert("Button Pressed!")}/>
          <Text style={textStyle.otherOption}>Already have a account? 
            <Text style = {{fontWeight:'bold', ...textStyle.otherOption}} onPress={()=> changeScreen('Login')}> Sign in</Text>
          </Text>
      </View>
    
  </ThemeProvider>
  );
}