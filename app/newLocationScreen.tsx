import React, { useState, useEffect } from 'react';
import Content from '../components/basics/Content';
import Header from '../components/basics/Header';
import Footer from '../components/basics/Footer';
import { CustomMap } from '../components/interactable/CustomMap';
import ButtonGrid from '../components/interactable/ButtonGrid';
import { useMqttClient } from '../mqtt/useMqttClient';
import HorizontalGroupIcons from '../components/icons/icgroup/icon_hgroup';
import { Marker as MarkerType } from '../types/types';

const NewLocationScreen = () => {
  const imgsrc = require('../assets/map4.png');
  const [mapImage, setMapImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [markers, setMarkers] = useState<{ start: MarkerType | null; end: MarkerType | null }>({
    start: null,
    end: null,
  });

  const {
    connectClient,
    disconnectClient,
    sendLocationCommand,
    sendLocationMarkers,
  } = useMqttClient((base64Image: string) => {
    setMapImage(base64Image);
  });

  useEffect(() => {
    connectClient();
    return () => {
      disconnectClient();
    };
  }, []);

  const handleScanToggle = () => {
    const newIsScanning = !isScanning;
    setIsScanning(newIsScanning);
    sendLocationCommand(newIsScanning ? 'start_scan' : 'stop_scan');
    console.log(newIsScanning ? 'Start Scan' : 'Stop Scan');
  };

  const handlePlanRoute = () => {
    sendLocationCommand('plan_route');
    console.log('Plan Route');
  };

  const handleExecuteRoute = () => {
    sendLocationCommand('execute_route');
    console.log('Execute Route');
  };

  const handleSendLocation = () => {
    const { start, end } = markers;
    if (start && end) {
      sendLocationMarkers(
        { x: start.x, y: start.y },
        { x: end.x, y: end.y }
      );
      console.log('Markers sent: ', { start, end });
    } else {
      console.log('Both start and end markers need to be set.');
    }
  };

  const handleResetMarkers = () => {
    setMarkers({ start: null, end: null });
    console.log('Markers reset');
  };

  return (
    <Content>
      <Header>
        <HorizontalGroupIcons />
      </Header>
      <CustomMap 
        imageSource={mapImage ? { uri: mapImage } : imgsrc}
        updateMarkers={(start, end) => {
          setMarkers({ start, end });
        }}
        markers={[markers.start, markers.end].filter((marker): marker is MarkerType => marker !== null)}
      />
      <ButtonGrid
        onLoadMap={() => console.log('Load Map pressed')}
        onSendLocation={handleSendLocation}
        onResetMarkers={handleResetMarkers}
        isScanning={isScanning}
        onScanToggle={handleScanToggle}
        onPlanRoute={handlePlanRoute}
        onExecuteRoute={handleExecuteRoute}
      />
      <Footer />
    </Content>
  );
};

export default NewLocationScreen;
