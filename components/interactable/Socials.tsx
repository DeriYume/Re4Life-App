import { View, Image, StyleSheet } from "react-native";

const Socials = () => {
  return (
    <View style={styles.socials}>
      <Image source={require("../../assets/btn_x.png")} />
      <Image source={require("../../assets/btn_yt.png")} />
      <Image source={require("../../assets/btn_fb.png")} />
      <Image source={require("../../assets/btn_ig.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  socials: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
});

export default Socials;
