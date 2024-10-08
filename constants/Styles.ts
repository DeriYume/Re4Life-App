import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  screenContentContainer: {
    flex: 1,
    width: windowWidth,
    alignItems: "center",
    alignSelf: "center",
  },
  textPromptContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  textPrompt: {
    fontSize: 14,
    color: "#7B7474",
    textDecorationLine: "underline",
  },
  blueTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00A0E3",
    marginBottom: 10
  },
  deviceContainer: {
    width: "100%",
    padding: 10,
  },
  currentDeviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currentDeviceText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#585555",
  },
  currentDeviceName: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "#838A8E",
    marginVertical: 10,
  },
  robotText: {
    fontSize: 18,
    color: "#5A656C",
    fontWeight: "bold",
    marginVertical: 10,
  },
  contentSplitContainer: {
    flex: 1,
    flexDirection: "row"
  },
  sideContentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "15%",
    height: "100%"
  },
  centerContentContainer: {
    flexDirection: "column-reverse",
    width: "70%",
    height: "100%",
  },
});

export default Styles;