import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default Screen1 = ({ route ,navigation }) =>{
  return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
          title="Go to Settings"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Settings', {
              itemId: 86,
              itemName: 'Apple',
            });
          }}
        />
    </View>
  );
}

