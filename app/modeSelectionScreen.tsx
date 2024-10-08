import React from "react";
import { View } from "react-native";
import Content from "../components/basics/Content";
import Header from "../components/basics/Header";
import Logo from "../components/basics/logo";
import ScreenTitle from "../components/design/ScreenTitle";
import Footer from "../components/basics/Footer";
import ModeSelection from "../components/interactable/ModeSelection";
import Styles from "../constants/Styles";
import Back from "../components/icons/icon_back";

const ModeSelectionScreen = () => {
  return (
    <Content>
      <Header><Back /></Header>
      <Logo />
      <View style={Styles.screenContentContainer}>
        <ScreenTitle title="Choose Robot Mode" />
        <ModeSelection
          modeName="Assistant mode"
          imageSource={require("../assets/mode_assistant.png")}
          navigateTo="/assistantModeScreen"
        />
        <ModeSelection
          modeName="Assembly mode"
          imageSource={require("../assets/mode_assembly.png")}
          navigateTo="/assemblyModeScreen"
        />
      </View>
      <Footer />
    </Content>
  );
};

export default ModeSelectionScreen;
