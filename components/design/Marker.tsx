import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MarkerProps {
  x: number;
  y: number;
  label: string;
  color: string;
}

export const Marker: React.FC<MarkerProps> = ({ x, y, label, color }) => {
  return (
    <View style={[styles.marker, { left: x - 10, top: y - 10, backgroundColor: color }]}>
      <Text style={styles.markerText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 8,
  },
});
