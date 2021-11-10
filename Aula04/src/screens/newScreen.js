import React from "react";
import { View, Image, StyleSheet } from "react-native";

const New = () => {
  return (
    <View style={styles.center}>
        <Image source={{ uri: 'https://www.imagenspng.com.br/wp-content/uploads/2016/04/zootopia-flecha.png'}}/>
        <Image source={{ uri: 'https://c.tenor.com/GRFYsmhOsAYAAAAC/sakura-moon.gif'}}/>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
               style={{ width: 400, height: 400}} />
    </View>
  );
};
const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#212121",
    },
  });

export default New;
