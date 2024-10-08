import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ScreenTitleProps { title?: string; }

const ScreenTitle: React.FC<ScreenTitleProps> = ({ title }) => {
  if (!title) return null;

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#A1BAC9",
    margin: 20,
    alignSelf: "center"
  },
});

export default ScreenTitle;