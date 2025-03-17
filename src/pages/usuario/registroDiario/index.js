import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../../../components/header.js';
import Botao from '../../../components/botao.js';
import RatingButtons from '../../../components/handlePress.js';

class RegistroDiarioScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Animus',
      corBotao: '#FFF',
      corTextoBotao: 'gray',
    };
  }

  handleaa = (value) => {
    console.log("Nota selecionada:", value);
  };

  render() {
    const handleRatingSelect = (value) => {
      console.log("Nota selecionada:", value);
    };

    return (
      <View style={{ flex: 1 }}>
        <Header userName="Sergio" />

        <Text style={styles.texto}>Como você está se sentindo:</Text>
        <RatingButtons onSelect={handleRatingSelect} />

        <View style={styles.container2}>
          <TextInput
            style={styles.input}
            placeholder="Digite..."
          />
          <Botao
            color={'#FFFEFE'}
            background={'#9C51C4'}
            title={'Enviar'}
            onPress={this.handleaa}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 200,
    borderWidth: 1,
    borderColor: '#222',
    backgroundColor: 'white',
    margin: 20,
    fontSize: 18,
    paddingLeft: 20,
    textAlignVertical: 'top',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
    marginBottom: 5,
  },
  container2: {
    padding: 20,
  },
});

export default RegistroDiarioScreen;
