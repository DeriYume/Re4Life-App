import { Stack } from "expo-router";
import React from "react";

const options = {
  headerShown: false,
  contentStyle: { backgroundColor: 'transparent' }
};

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={options} />
      <Stack.Screen name="signUpScreen" options={options} />
      <Stack.Screen name="robotSelectionScreen" options={options} />
      <Stack.Screen name="newRobotScreen" options={options} />
      <Stack.Screen name="modeSelectionScreen" options={options} />
      <Stack.Screen name="settingsScreen" options={options} />
      <Stack.Screen name="assistantModeScreen" options={options} />
      <Stack.Screen name="assemblyModeScreen" options={options} />
      <Stack.Screen name="newLocationScreen" options={options} />
    </Stack>
  );
};

export default RootLayout;
