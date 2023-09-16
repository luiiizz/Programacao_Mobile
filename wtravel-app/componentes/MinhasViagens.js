import { StatusBar } from 'expo-status-bar';
import React, { Component, ReactNode} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MinhasViagens = ({ children }) => {
  return (
    <TouchableOpacity style={styles.viagens}>
      <Text style={styles.texto}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viagens:{
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 30,
    marginTop: 20,
  },

  texto:{
    fontWeight: '600',
  }
});


export default MinhasViagens;