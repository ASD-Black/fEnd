import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Logo from '../components/logo'

export default function Login() {
    return (
      <View style={styles.container}>
        <Logo/> 
      </View>
    );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
  });