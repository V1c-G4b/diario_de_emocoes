import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from './logo.js';
import Botao from './botao.js';
import { LinearGradient } from 'expo-linear-gradient';

const arrayPersonagens = [
    require('./../../assets/images/personagens/anciendade.png'),
    require('./../../assets/images/personagens/felicidade.png'),
    require('./../../assets/images/personagens/medo.png'),
    require('./../../assets/images/personagens/raiva.png'),
    require('./../../assets/images/personagens/tristeza.png'),
];
let numeroAleatorio = Math.floor(Math.random() * arrayPersonagens.length);
let img = arrayPersonagens[numeroAleatorio];

export default function Header({ userName }) {
    
    return (
        <View style={[styles.shadowContainer,styles.header]}>
        
        <View style={styles.headerView}>
            {/* Logo do App */}
            <Image 
                source={img} // Substitua pelo caminho da sua logo
                style={styles.logo }
            />
            {/* Nome do Usuário */}
            <Text style={styles.userName}>Bem Vindo {userName}</Text>

            {/* Botão de Sair */}
            <TouchableOpacity style={styles.logoutButton}>
                <Ionicons name="log-out-outline" size={24} color="white" />
            </TouchableOpacity>
        </View>
        
      </View> 
    );
}


const styles = StyleSheet.create({
    shadowContainer: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2, 
    },
    header: {
        width: "100%",
        height: 115,
        borderBottomLeftRadius: 5, // Bordas arredondadas na parte inferior
        borderBottomRightRadius: 5,
        
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 40,
    },
    logo: {
        width: 70,
        height: 57,
        resizeMode: 'contain',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    logoutButton: {
        padding: 5,
    }
});