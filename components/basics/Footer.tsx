import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.copyright}>Re4Life 2023 ©</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  copyright: {
    fontSize: 14,
    color: "#797979",
  },
});

export default Footer;
