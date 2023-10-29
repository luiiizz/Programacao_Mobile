import { StatusBar } from 'expo-status-bar';
import React, { Component, useState  } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput , Button, Alert } from 'react-native';
import { format } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';


import MainFund from '../componentes/MainFund';

export default function Principal() {

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [numeric, setNumeric] = useState('');

  const [date, setDate] = useState(new Date());

  const confirmar = async () => {
        // Salvar os dados da viagem no AsyncStorage
        const viagem = {
            data: format(date, 'dd/MM/yyyy'),
            local: text1,
            transporte: text2,
            valor: numeric
        };

        // Convertendo para string antes de salvar no AsyncStorage
        await AsyncStorage.setItem('viagem', JSON.stringify(viagem));

        Alert.alert('Viagem agendada!');
};

  const handleSubmit = () => {
    // Aqui, você pode lidar com os dados do formulário, como enviar para um servidor ou processá-los localmente.
    console.log('Data:', date);
    console.log('Texto 1:', text1);
    console.log('Texto 2:', text2);
    console.log('Valor Numérico:', numeric);
  };



  return (
    <View style={styles.container}>
        <MainFund>
            <Text style={styles.titulo2}>Nova Viagem</Text>
            
            <View style={styles.form}>

              <Text>Data:</Text>
              <TextInput
                style={styles.inputs}
                value={format(date, 'dd/MM/yyyy')} // Mostrar a data selecionada no campo de texto
                editable={false} // Impede a edição direta do campo de texto
              />

              <Text>Local:</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={text => setText1(text)}
                value={text1}
                placeholder="Informe o local"
              />

              <Text>Transporte:</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={text => setText2(text)}
                value={text2}
                placeholder="Informe o transporte"
              />

              <Text>Valor (Orçamento):</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={text => setNumeric(text)}
                value={numeric}
                keyboardType="numeric" // Isso faz com que o teclado exiba apenas números
                placeholder="Digite o valor do orçamento"
              />

              <TouchableOpacity style={styles.button} onPress={confirmar}>
                  <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>

            </View>
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
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight:'800'
  },

  form:{
    padding: 15,
    marginLeft: 10,
    marginTop: 5
  },

  inputs:{
    width: '90%',
    borderWidth: 1,
    borderRadius: 12,
    textAlign: 'center',
    marginVertical: 8,
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
