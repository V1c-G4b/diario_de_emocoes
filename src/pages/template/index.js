import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../usuario/home/index.js";
import RegistroDiarioScreen from "../usuario/registroDiario/index.js";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="HomeMain" 
        component={HomeScreen} 
        options={{ title: "Home" }} 
      />
      <HomeStack.Screen 
        name="Child" 
        component={RegistroDiarioScreen} 
        options={{ title: "Registro Diário" }} 
      />
    </HomeStack.Navigator>
  );
}
