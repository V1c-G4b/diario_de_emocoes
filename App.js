import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import Login from './src/pages/usuario/login/index.js';

export default function App() {
  return (
    <LinearGradient
    colors={['#BE7CFF', '#DAD8FF']} // Cores do gradiente
    style={styles.container}
    start={{ x: 0, y: 0 }} // Direção do gradiente (top-left)
    end={{ x: 1, y: 1 }}   // Direção do gradiente (bottom-right)
    > 
      <Login />
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});