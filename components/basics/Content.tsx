import React from "react";
import { View, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Dimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

interface ContentProps { children: React.ReactNode; }

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView>
      <ImageBackground source={require("../../assets/background.png")} style={styles.background} resizeMode="cover" >
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>{children}</View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'space-between',
  },
  background: {
    width: windowWidth,
  },
});

export default Content;
