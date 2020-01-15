import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Logo from '../components/logo'
import SignUpform from '../components/SignUpform'

import { Actions } from 'react-native-router-flux'

export default function Signup() {
    return (
      <View style={styles.container}>
        <Logo/>
        <SignUpform/>
        <View style={styles.signUpTextCon}>
          <Text style={styles.signUpText}>Already have an account</Text>
          <Text style={styles.signupButton} onPress={()=> Actions.login()}>   Sign in</Text>
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