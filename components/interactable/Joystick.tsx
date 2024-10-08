import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

type JoystickProps = {
  onUpPress?: () => void;
  onLeftPress?: () => void;
  onCenterPress?: () => void;
  onRightPress?: () => void;
  onDownPress?: () => void;
};

const Joystick = ({
  onUpPress,
  onLeftPress,
  onCenterPress,
  onRightPress,
  onDownPress,
}: JoystickProps) => {
  return (
    <View style={styles.joystickContainer}>
    <View style={styles.joystickContent}>
      <TouchableOpacity onPress={onUpPress}>
        <Image source={require("../../assets/mov_up.png")} />
      </TouchableOpacity>
      <View style={styles.middleRow}>
        <TouchableOpacity onPress={onLeftPress}>
          <Image source={require("../../assets/mov_left.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCenterPress}>
          <Image source={require("../../assets/mov_center.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onRightPress}>
          <Image source={require("../../assets/mov_right.png")} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onDownPress}>
        <Image source={require("../../assets/mov_down.png")} />
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  joystickContainer: {
    alignItems: "center"
  },
  joystickContent: {
    width: 200,
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15
  },
  middleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default Joystick;
