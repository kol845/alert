import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, StyleSheet} from 'react-native';
import { Input, Text } from 'react-native-elements';
//{alert(JSON.stringify(props))}



const InputField = (props) => {
  const MyIcon = props.icon ? <Icon name={props.icon} size={24} color='grey'/> : null
  
  return(
      <Input 
        placeholder={props.placeholder}
        leftIcon={MyIcon}
        secureTextEntry={props.password}
      />
  );
}

const styles = StyleSheet.create({
  
});
InputField.defaultProps = {
  placeholder: "",
  icon: "",
  password:false,
}
  export default InputField