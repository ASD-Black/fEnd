import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';


export default class Form extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
    }
    this.login = this.login.bind(this);
  }
  
  // login() {
  //   console.log(this.state.email);
  // }

  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.inpuBox} 
            placeholder="Email"
            placeholderTextColor="#ffffff"
            onChangeText={ (email) => this.setState({email}) }
            />
        <TextInput style={styles.inpuBox} 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={ (password) => this.setState({password}) }
            />
        <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }


  login(){
    //alert(this.state.email)
    fetch('http://192.168.8.101:19000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
  
    .then((response) => response.json())
    .then((res) => {
      if(res.success === true){
        AsyncStorage.setItem('user', res.passengers);
        this.props.navigation.navigate('Home');
      }
  
      else{
        alert(res.message)
      }
    })
    .done()
  }
}



const styles = StyleSheet.create({
  container : {
    backgroundColor: '#455a64',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inpuBox: {
    width: 350,
    height:50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical:10
  },
  buttonText: {
      fontSize:18,
      fontWeight:'500',
      color: '#ffffff',
      textAlign: 'center',
      
  },
  button: {
    width: 150,
    backgroundColor: '#1c313a',
    height:50,
    borderRadius: 25,
    paddingVertical: 12,
    marginVertical:10
  }
  });