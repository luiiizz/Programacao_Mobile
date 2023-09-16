import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Principal from './app/index';
import ProximasViagens from './app/ProximasViagens';
import NovaViagem from './app/NovaViagem';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="ProximasViagens" component={ProximasViagens} />
        <Stack.Screen name="NovaViagem" component={NovaViagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

