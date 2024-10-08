import React from "react";
import * as Device from "expo-device";
import { View, Text } from "react-native";
import Content from "../components/basics/Content";
import Header from "../components/basics/Header";
import Logo from "../components/basics/logo";
import ScreenTitle from "../components/design/ScreenTitle";
import Footer from "../components/basics/Footer";
import Refresh from "../components/icons/icon_refresh";
import RadioButton from "../components/interactable/RadioButton";
import Styles from "../constants/Styles";
import Back from "../components/icons/icon_back";

const NewRobotScreen = () => {
    const deviceModel = Device.modelName;
  return (
    <Content>
      <Header><Back /></Header>
      <Logo />
      <View style={Styles.screenContentContainer}>
      <ScreenTitle title="Pair New Robot" />
      <View style={Styles.deviceContainer}>
          <View style={Styles.currentDeviceContainer}>
            <Text style={Styles.currentDeviceText}>Current Device</Text>
            <Refresh />
          </View>
          <Text style={Styles.currentDeviceName}>{deviceModel}</Text>
          <Text style={Styles.robotText}>Available Robots</Text>
          <RadioButton />
        </View>
      </View>
      <Footer />
    </Content>
  );
};

export default NewRobotScreen;
