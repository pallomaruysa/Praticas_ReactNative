import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(){

    const [nome, setNome] = useState("Palloma Ruysa");

  return (
    <View style={styles.container}>
      <Text>Oii, {nome}</Text>
      <TextInput value={nome} onChangeText = {(nome) => {setNome(nome)}}/>
      <Button title="Mudar nome" onPress={() => {setNome("Testando")}}/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
    alignItems: 'center',
    justifyContent: 'center',
  },

});