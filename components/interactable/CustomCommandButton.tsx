import React from "react";
import { TouchableOpacity, Text, ViewStyle, StyleSheet } from "react-native";

interface CustomCommandButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
}

const CustomCommandButton: React.FC<CustomCommandButtonProps> = ({ title, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, buttonStyle]} onPress={onPress} >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#009FE3',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default CustomCommandButton;
