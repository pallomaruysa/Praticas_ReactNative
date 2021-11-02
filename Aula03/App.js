import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App(){

    const [nome, setNome] = useState("Palloma Ruysa");

  return (
    <View style={styles.container}>
      <Image style={{width: 100, height: 100, backgroundColor: '#1b0038'}}
      source={{uri: 'https://png2png.com/wp-content/uploads/2021/06/moon-png1-1024x1024.png'}}/>
      <Image style={styles.image}
        source={{ uri:'https://www.imagenspng.com.br/wp-content/uploads/2016/04/zootopia-flecha.png'}}/>
        <Image style={{width: 300, height: 200}} source={{uri: 'https://c.tenor.com/GRFYsmhOsAYAAAAC/sakura-moon.gif'}}/>
      <Text style={{color: 'white'}}>Oii, {nome}</Text>
      <TextInput style={styles.input} value={nome} onChangeText = {(nome) => {setNome(nome)}}/>
      <Button style={styles.button} title="Mudar nome" onPress={() => {setNome("Moon")}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#380004',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  input:{
    textAlign: 'center',
    color: 'white',
    backgroundColor:'#1b0038',
    margin: 10,
  },
  button:{
    color: '#1b0038',
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: 'center',
  }
});