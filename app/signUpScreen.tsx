import React from "react";
import { router } from "expo-router";
import { View, Text } from "react-native";
import Content from "../components/basics/Content";
import Header from "../components/basics/Header";
import ScreenTitle from "../components/design/ScreenTitle";
import Footer from "../components/basics/Footer";
import Logo from "../components/basics/logo";
import CustomFormButton from "../components/interactable/CustomFormButton";
import InputField from "../components/interactable/InputField";
import Styles from "../constants/Styles";
import Socials from "../components/interactable/Socials";

const SignUpScreen = () => {
  return (
    <Content>
      <Header />
      <Logo />
      <View style={Styles.screenContentContainer}>
        <ScreenTitle title="Sign Up" />
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
        <InputField
          icon={require("../assets/icon_lock.png")}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <InputField
          icon={require("../assets/icon_username.png")}
          placeholder="Username"
          secureTextEntry={false}
        />
        <CustomFormButton
          title="Sign Up"
          onPress={() => router.push("/robotSelectionScreen")}
        />
        <View style={Styles.textPromptContainer}>
          <Text style={Styles.textPrompt} onPress={() => router.push("/")}>
            Already have an account? Log In
          </Text>
        </View>
        <Socials />
      </View>
      <Footer />
    </Content>
  );
};

export default SignUpScreen;
