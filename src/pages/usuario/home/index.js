import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Logo from '../../../components/logo.js';
import Botao from '../../../components/botao.js';
import Header from '../../../components/header.js';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Animus',
      corBotao: '#FFF',
      corTextoBotao: 'gray',
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header userName="Sergio" />
        <ScrollView style={styles.container1}>
        <Botao
                        color={this.state.corTextoBotao}
                        background={this.state.corBotao}
                        materialIcons='edit'
                        alignItems='space-between'
                        titleRight={'06/03/2025 😀'} /> 
                    <Botao
                        color={this.state.corTextoBotao} 
                        background={this.state.corBotao}
                        materialIcons='edit'
                        alignItems='space-between'
                        titleRight={'05/03/2025 😑'} /> 
                    <Botao
                        color={this.state.corTextoBotao} 
                        background={this.state.corBotao}
                        materialIcons='edit'
                        alignItems='space-between'
                        titleRight={'04/03/2025 🙁'} /> 
                    <Botao
                        color={this.state.corTextoBotao} 
                        background={this.state.corBotao}
                        materialIcons='edit'
                        alignItems='space-between'
                        titleRight={'03/03/2025 😀'} />
                    <Botao
                        color={this.state.corTextoBotao} 
                        background={this.state.corBotao}
                        materialIcons='edit'
                        alignItems='space-between'
                        titleRight={'02/03/2025 🙁'} />   
                    <Botao
                        color={this.state.corTextoBotao}
                        background={this.state.corBotao}
                        materialIcons='edit'
                        alignItems='space-between'
                        titleRight={'01/03/2025 😭'} /> 
                    <Botao
                        color={this.state.corTextoBotao} 
                        background={this.state.corBotao}
                        materialIcons='edit'
                        alignItems='space-between'
                        titleRight={'28/02/2025 🙂'} /> 
                    <Botao
                        color={this.state.corTextoBotao} 
                        background={this.state.corBotao}
                        materialIcons='edit'
                        alignItems='space-between'
                        titleRight={'27/02/2025 🙂'} />      
        </ScrollView>

        <View style={styles.container2}>
          <Botao
            color={'#FFFEFE'}
            background={'#9C51C4'}
            title={'Mais'}
            onPress={() => this.props.navigation.navigate('Child')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 2,
    borderColor: 'gray',
  },
  container2: {
    padding: 20,
  },
});

export default HomeScreen;
