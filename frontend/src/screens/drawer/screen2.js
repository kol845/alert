import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default Screen2 = ({ route ,navigation }) =>{
  const { itemId, itemName } = route.params;
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Settings</Text>
    <Text>itemId: {JSON.stringify(itemId)}</Text>
    <Text>itemName: {JSON.stringify(itemName)}</Text>
    <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
  </View>
  );
}
