import React from "react";
import { View, StyleSheet } from "react-native";

interface HeaderProps { children?: React.ReactNode; }

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <View style={styles.headerContainer}>{children}</View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
  },
});

export default Header;
