import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/homeScreen";
import New from "../screens/newScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
        screenOptions={{
            headerStyle: {
            backgroundColor: "black",
            },
            headerTintColor: "white",
        }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Inicial' }} />
      <Stack.Screen name="New" component={New} options={{ title: 'New' }} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;