import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback, StyleSheet, ImageSourcePropType } from 'react-native';
import { Marker } from '../design/Marker';
import { Marker as MarkerType } from '../../types/types';

interface ImageContainerProps {
  imageSource: ImageSourcePropType;
  updateMarkers: (start: MarkerType | null, end: MarkerType | null) => void;
  markers: MarkerType[];
}

export const CustomMap: React.FC<ImageContainerProps> = ({ imageSource, updateMarkers, markers }) => {
  const addMarker = (event: any) => {
    if (markers.length >= 2) {
      console.log('Max markers reached');
      return;
    }

    const { locationX, locationY } = event.nativeEvent;

    const newMarker: MarkerType = {
      id: markers.length === 0 ? 'S' : 'F',
      x: Math.round(locationX),
      y: Math.round(locationY),
      color: markers.length === 0 ? 'lightblue' : 'darkblue',
    };

    const newMarkers = [...markers, newMarker];
    updateMarkers(
      newMarkers.find(marker => marker.id === 'S') || null,
      newMarkers.find(marker => marker.id === 'F') || null
    );
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={addMarker}>
        <View style={styles.mapContainer}>
          <Image
            source={imageSource}
            style={styles.mapImage}
            onError={(error) => console.error('Error loading image:', error)}
          />
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              x={marker.x}
              y={marker.y}
              label={marker.id.charAt(0).toUpperCase() + marker.id.slice(1)}
              color={marker.color}
            />
          ))}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flex: 1,
    backgroundColor: 'lightgray',
    borderColor: '#000',
    borderWidth: 1,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
