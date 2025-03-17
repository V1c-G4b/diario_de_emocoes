import React, {Component} from 'react';
import { StyleSheet,
        TouchableOpacity,
        Text,
        Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class Botao extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <TouchableOpacity   color={'#FFFEFE'} 
                                background={'#9C51C4'} 
                                title='Logar'
                                materialIcons=''
                                titleLeft=''
                                titleRight=''
                                alignItems=''
                                style={[styles.botao, {backgroundColor: this.props.background || '#26A1F9', justifyContent: this.props.alignItems || 'center'}]}
                                onPress={this.props.onPress} 
                                  >
                {this.props.materialIcons ? (
                    <MaterialIcons name={this.props.materialIcons} size={24} color="gray" />
                ) : null}
                {this.props.titleLeft ? (
                    <Text style={[styles.btnTexto, {color:this.props.color, display:'none'}]}> {this.props.titleLeft}</Text>
                ) : null}
                {this.props.title ? (
                    <Text style={[styles.btnTexto, {color:this.props.color}]}> {this.props.title}</Text>  
                ) : null} 
                {this.props.titleRight ? (
                    <Text style={[styles.btnTexto, {color:this.props.color}]}> {this.props.titleRight}</Text>  
                ) : null}                
                
                 
                     
            </TouchableOpacity>  
        );
    }

}

const styles = StyleSheet.create({
    botao:{
        height:55,
        margin:20,
        borderRadius:5,
        alignItems:'center',
        flexDirection:'row',
        alignItems: 'center',
        shadowColor: '#000', // Cor da sombra (iOS)
        shadowOffset: { width: 0, height: 4 }, // Direção da sombra (iOS)
        shadowOpacity: 0.3, // Opacidade da sombra (iOS)
        shadowRadius: 4, // Raio do desfoque (iOS)
        elevation: 6, // Sombra no Android
        paddingHorizontal:20
    },
    btnTexto:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnImage:{
        height:30,
        width:30
    }
});


export default Botao;                       