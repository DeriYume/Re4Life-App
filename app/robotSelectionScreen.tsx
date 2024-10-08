import React from "react";
import { Text, View } from "react-native";
import Content from "../components/basics/Content";
import Header from "../components/basics/Header";
import ScreenTitle from "../components/design/ScreenTitle";
import Footer from "../components/basics/Footer";
import Logo from "../components/basics/logo";
import Styles from "../constants/Styles";
import SearchBar from "../components/interactable/SearchBar";
import Carousel from "../components/interactable/Carousel";
import AddRobotIcon from "../components/icons/icon_addRobot";

const RobotSelectionScreen = () => {
  return (
    <Content>
      <Header />
      <Logo />
      <View style={Styles.screenContentContainer}>
      <ScreenTitle title="Welcome Back!" />
      <Text style={Styles.blueTitle}>Choose a Robot</Text>
        <SearchBar />
        <Carousel />
        <AddRobotIcon />
      </View>
      <Footer />
    </Content>
  );
};

export default RobotSelectionScreen;
