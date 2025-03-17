import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthContext } from "./src/contexts/AuthContext";
import HomeStackScreen from "./src/pages/template";
import LoginScreen from "./src/pages/usuario/login/index.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("Usuário autenticado:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <NavigationContainer>
        <LinearGradient
          colors={["#BE7CFF", "#DAD8FF"]}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Stack.Navigator>
            {isAuthenticated ? (
              <Stack.Screen
                name="HomeStack"
                component={HomeStackScreen}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="Auth"
                component={LoginScreen}
                options={{ title: "Autenticação" }}
              />
            )}
          </Stack.Navigator>
        </LinearGradient>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
