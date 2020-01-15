import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <Image style={{width:120, height:150}}
             source={require('../images/SLIIT_Logo.png')}
            />
            <Text style={styles.logoStyle}>Welcome to Sliit Shuttle Service</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoStyle: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255,255,255, 0.5)'
    }
  });