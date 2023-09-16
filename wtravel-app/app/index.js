import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MainFund from '../componentes/MainFund';

export default function Principal() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <MainFund>
            <Text style={styles.apresentacao}>Apresentando a WTravel, a solução perfeita para otimizar suas viagens de negócios. Esqueça os processos demorados e abrace a produtividade com nosso aplicativo moderno.</Text>
            
            <TouchableOpacity  onPress={() => navigation.navigate('ProximasViagens')} style={styles.button}>
                <Text style={styles.buttonText}>Minhas Viagens</Text>
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

  apresentacao:{
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 25,
    fontWeight:'500'
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
