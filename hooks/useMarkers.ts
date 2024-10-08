import { useState } from 'react';
import { Marker } from '../types/types';

export const useMarkers = () => {
  const [initialMarker, setInitialMarker] = useState<Marker | null>(null);
  const [finalMarker, setFinalMarker] = useState<Marker | null>(null);

  const handlePress = (e: any) => {
    const { locationX, locationY } = e.nativeEvent;
    if (!initialMarker) {
      setInitialMarker({ id: 'S', x: locationX, y: locationY, color: 'lightblue' });
    } else if (!finalMarker) {
      setFinalMarker({ id: 'F', x: locationX, y: locationY, color: 'darkblue' });
    }
  };

  const resetMarkers = () => {
    setInitialMarker(null);
    setFinalMarker(null);
  };

  return { initialMarker, finalMarker, handlePress, resetMarkers };
};
