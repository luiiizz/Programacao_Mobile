import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MainFund from '../componentes/MainFund';
import MinhasViagens from '../componentes/MinhasViagens';

export default function Principal() {
 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <MainFund>
            <Text style={styles.titulo2}>Próximas viagens</Text>
            
            <MinhasViagens>
              São Paulo - SP {'\n'} 
               - 07/08/2023...
            </MinhasViagens>
            
            <MinhasViagens>
              Rio de Janeiro - RJ {'\n'} 
               - 09/08/2023...
            </MinhasViagens>

            <MinhasViagens>
              Goiânia - GO {'\n'} 
               - 07/09/2023...
            </MinhasViagens>

            <MinhasViagens>
              New York - EUA {'\n'} 
               - 10/11/2023...
            </MinhasViagens>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NovaViagem')}>
                <Text style={styles.buttonText}>Nova viagem</Text>
            </TouchableOpacity>
        </MainFund>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  titulo2:{
    width: '80%',
    marginLeft: 40,
    marginTop: 20,
    fontSize: 20,
    fontWeight:'800'
  },

  viagens:{
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
    padding: 10,
    marginTop: 20,
  },

  button:{
    backgroundColor: '#00D26D',
    width: '50%',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 80,
  },
  buttonText:{
    alignSelf: 'center',
    paddingVertical: 10,
    fontSize: 20
  }
});
