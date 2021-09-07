import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component{
  state={
    nome:"Palloma Ruysa"
  }
  mudarNome = () => {
    if(this.state.nome=="Palloma Ruysa")
      this.setState({nome:"outro nome"}) 
    else
      this.setState({nome:"Palloma Ruysa"})
  }

  onChangeText=(nome)=>{
    this.setState({nome})
  }

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{this.state.nome}</Text>
      <TextInput value={this.state.nome} onChangeText={this.onChangeText=this.onChangeText} style={styles.input}/>
      <Button title="Mudar nome" onPress={this.mudarNome} style={styles.button}/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderColor: 'purple',
  },
  text: {
    fontSize: 30,
  },
  button: {
    backgroundColor: 'purple',
  },
});