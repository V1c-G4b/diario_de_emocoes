import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function RatingButtons({ onSelect }) {
  const [selected, setSelected] = useState(null);

  const handlePress = (value) => {
    setSelected(value);
    if (onSelect) {
      onSelect(value); // Retorna o valor para o componente pai, se necessário
    }
  };
  const emojis = ["😭", "🙁", "😑", "🙂", "😀"];
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((value) => (
        <TouchableOpacity
          key={value}
          style={[
            styles.button,
            selected === value && styles.selectedButton,
          ]}
          onPress={() => handlePress(value)}
        >
          <Text style={styles.text}>{emojis[value-1]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: "#4CAF50", // Cor quando o botão é selecionado
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});