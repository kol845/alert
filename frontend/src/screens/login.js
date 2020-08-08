import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Text, ThemeProvider} from 'react-native-elements';
//const UbuntBut = (props) => <Button raised {...props} buttonStyle={styles.signUpButton}/>;
import {InputField} from '@molecules'
import {textStyle, theme, buttonStyle, imageStyle} from '@styles'

import background from '@assets/images/login_background_v1.jpg'

export default Login = ({ route ,navigation }) =>{
  const [username, onChangeUsername] = React.useState('');

  function changeScreen(nextScreen){
    navigation.navigate(nextScreen)
  }
  
  return(
    <ThemeProvider theme ={theme} >
      <ImageBackground source = {background} style={imageStyle.backgroundImage}/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
            <InputField placeholder="Username" icon="user"/>
            <InputField placeholder="Password" icon="key" password={true}/>
            <Button buttonStyle = {buttonStyle.loginButton}title="Sign in" onPress={()=>alert("Button Pressed!")}/>
            <Text style={textStyle.otherOption}>Don't have a account? 
              <Text style = {{fontWeight:'bold', ...textStyle.otherOption}} onPress={()=> changeScreen('Register')}> Sign up</Text>
            </Text>
        </View>
      
    </ThemeProvider>

  );
}
const styles = StyleSheet.create({

  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'UbuntuLight',
  },
  signUpButton: {
    width: 250,
    borderRadius: Math.round(45 / 2),
    height: 45,
  },
});