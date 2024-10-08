import React from "react";
import { router } from "expo-router";
import { View, Text, Alert } from "react-native";
import Content from "../components/basics/Content";
import Header from "../components/basics/Header";
import ScreenTitle from "../components/design/ScreenTitle";
import Footer from "../components/basics/Footer";
import Logo from "../components/basics/logo";
import CustomFormButton from "../components/interactable/CustomFormButton";
import InputField from "../components/interactable/InputField";
import Separator from "../components/design/Separator";
import Styles from "../constants/Styles";
import Socials from "../components/interactable/Socials";

const LoginScreen = () => {
  return (
    <Content>
      <Header />
      <Logo />
      <View style={Styles.screenContentContainer}>
        <ScreenTitle title="Login" />
        <InputField
          icon={require("../assets/icon_mail.png")}
          placeholder="Email Address"
          secureTextEntry={false}
        />
        <InputField
          icon={require("../assets/icon_lock.png")}
          placeholder="Password"
          secureTextEntry={true}
        />
        <CustomFormButton
          title="Log In"
          onPress={() => router.push("/robotSelectionScreen")}
        />
        <View style={Styles.textPromptContainer}>
          <Text
            style={Styles.textPrompt}
            onPress={() => {
              Alert.alert(
                "Not implemented",
                "This function was not implemented yet..",
                [{ text: "OK" }]
              );
            }}
          >
            Forgot my Password
          </Text>
        </View>
        <Separator text="OR"/>
        <CustomFormButton title="Sign Up" onPress={() => router.push("/signUpScreen")} />
        <Socials />
      </View>
      <Footer />
    </Content>
  );
};

export default LoginScreen;
