import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

interface InputFieldProps {
  icon: any;
  placeholder: string;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ icon, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputField}>
      <Image source={icon} />
      <TextInput style={styles.inputText} placeholder={placeholder} secureTextEntry={secureTextEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  inputText: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default InputField;