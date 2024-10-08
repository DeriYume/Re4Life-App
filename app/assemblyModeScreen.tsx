import React from "react";
import { View } from "react-native";
import Content from "../components/basics/Content";
import Header from "../components/basics/Header";
import Footer from "../components/basics/Footer";
import Styles from "../constants/Styles";
import Joystick from "../components/interactable/Joystick";
import HorizontalGroupIcons from "../components/icons/icgroup/icon_hgroup";

const AssemblyModeScreen = () => {
  return (
    <Content>
      <Header><HorizontalGroupIcons /></Header>
      <View style={Styles.screenContentContainer}>
        <View style={Styles.contentSplitContainer}>
            <View style={Styles.sideContentContainer}></View>
        <View style={Styles.centerContentContainer}>
          <Joystick
            onUpPress={() => console.log("Up pressed")}
            onLeftPress={() => console.log("Left pressed")}
            onCenterPress={() => console.log("Center pressed")}
            onRightPress={() => console.log("Right pressed")}
            onDownPress={() => console.log("Down pressed")}
          />
        </View>
        <View style={Styles.sideContentContainer}></View>
        </View>
      </View>
      <Footer />
    </Content>
  );
};

export default AssemblyModeScreen;
