import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Router, Stack, Scene} from 'react-native-router-flux';


import Login from './src/pages/Login'
import Signup from './src/pages/Signup'

export default function App() {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="login" component={Login} title="Login" initial={true}/>
        <Scene key="signup" component={Signup} title="Signup" />
        </Stack>
    </Router>    
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
