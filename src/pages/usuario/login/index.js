// src/pages/usuario/login/index.js
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Logo from "./../../../components/logo.js";
import Botao from "./../../../components/botao.js";
import { validarLogin } from "./../../../database/usuario.js";
import { AuthContext } from "../../../contexts/AuthContext.js";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Animus",
      userName: "",
      password: "",
    };
  }

  static contextType = AuthContext;

  handleLogin = async () => {
    const { userName, password } = this.state;
    const valido = await validarLogin(userName, password);

    if (valido) {
      this.context.setIsAuthenticated(true);
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerLogo}>
          <Logo altura={150} largura={150} />
          <Text style={styles.textLogo}>{this.state.title}</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Usuário..."
            value={this.state.userName}
            onChangeText={(text) => this.setState({ userName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha..."
            secureTextEntry
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />

          <Botao
            color={"#FFFEFE"}
            background={"#9C51C4"}
            title={"Logar"}
            onPress={this.handleLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogo: {
    marginTop: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 2,
  },
  textLogo: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "arial",
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#222",
    backgroundColor: "white",
    margin: 20,
    fontSize: 18,
    paddingLeft: 20,
  },
});

export default LoginScreen;
