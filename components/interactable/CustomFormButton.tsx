import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CustomFormButtonProps {
  title: string;
  onPress: () => void;
}

const CustomFormButton: React.FC<CustomFormButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#009FE3',
    margin: 15,
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default CustomFormButton;
