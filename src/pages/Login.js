import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


import Logo from '../components/logo'
import Form from '../components/Form'

import { Actions } from 'react-native-router-flux'

export default function Login() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Form/>
        <View style={styles.signUpTextCon}>
          <Text style={styles.signUpText}>Don't have an account yet</Text>
          <Text style={styles.signupButton} onPress={()=> Actions.signup()}>   SignUp</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpTextCon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical:20,
    flexDirection:'row'
  },
  signUpText: {
    color:'rgba(255,255,255,0.6)',
    fontSize:17
  },
  signupButton: {
    color:'#ffffff',
    fontSize:17,
    fontWeight:'700'
  }
  });