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
        <Stack.Screen name="Principal" 
                      component={Principal} 
                      options={{
                        title: 'Principal',
                        headerStyle: styles.headerTitles,
                      }}
        />
        <Stack.Screen name="ProximasViagens" 
                      component={ProximasViagens} 
                      options={{
                        title: 'Proximas Viagens',
                        headerStyle: styles.headerTitles,
                      }}
        />
        <Stack.Screen name="NovaViagem" 
                      component={NovaViagem} 
                      options={{
                        title: 'Nova Viagem',
                        headerStyle: styles.headerTitles,
                      }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

      headerTitles: {
        backgroundColor: '#00D26D',
      }

});

