import React, { useState, useCallback } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const Refresh = () => {
  const useScreenRefresh = () => {
    const [refresh, setRefresh] = useState(false);

    const refreshScreen = useCallback(() => {
      setRefresh((prev) => !prev);
    }, []);

    return refreshScreen;
  };

  const handleRefresh = useScreenRefresh();

  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={handleRefresh}>
        <Image source={require("../../assets/icon_refresh.png")} style={styles.iconImage}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    margin: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
});

export default Refresh;
