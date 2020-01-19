import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView } from 'react-native';




export default function Home() {
    return (
      <View style={styles.container}>
        <Text>Hi there You are in Home Page</Text>
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