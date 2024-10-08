import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Robotic Wheelchair XX2098",
    "Robotic Wheelchair ABC2024",
    "Robotic Wheelchair ZY8856Z",
  ];

  return (
    <View>
      {options.map((option, index) => (
        <View key={index} style={styles.optionItem}>
          <TouchableOpacity onPress={() => setSelectedOption(option)}>
            <View style={styles.radioButton}>
              {selectedOption === option && (<View style={styles.radioButtonDot} />)}
            </View>
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>{option}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  radioButton: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonDot: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: "#00A0E3",
  },
  radioButtonText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#889094",
    marginLeft: 10,
    textAlignVertical: 'center',
  },
});

export default RadioButton;
