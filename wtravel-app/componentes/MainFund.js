import { StatusBar } from 'expo-status-bar';
import React, { Component, ReactNode} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const MainFund = ({ children }) => {
  return (
    <View style={styles.container}>

        <View style={styles.introducao}>
            <View>
                <Text style={styles.nome}>WTravel</Text>
                <Text style={styles.slogan}>Torne suas viagens corporativas mais fáceis</Text>
            </View>
            <Image style={styles.logo}
            source={require('../assets/logo.png')}
            />
        </View>
        

        <View style={styles.Card}>
            {children}
        </View>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#00D26D',
    alignItems: 'center',
  },

  introducao:{
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },

  nome:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  slogan:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    width: 200,
    textAlign: 'center'
  },
 
  logo:{
    margin: 0,
    width: 120,
    height: 120,
 },


  Card:{
    backgroundColor: 'white',
    width: '88%',
    height: '80%',
    borderRadius: 15,
    marginTop: 15,
  }

});


export default MainFund;