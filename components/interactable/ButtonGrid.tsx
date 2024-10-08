import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomCommandButton from './CustomCommandButton';
import Separator from '../design/Separator';

interface ButtonGridProps {
  onLoadMap: () => void;
  onSendLocation: () => void;
  onResetMarkers: () => void;
  isScanning: boolean;
  onScanToggle: () => void;
  onPlanRoute: () => void;
  onExecuteRoute: () => void;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({
  onLoadMap,
  onSendLocation,
  onResetMarkers,
  isScanning,
  onScanToggle,
  onPlanRoute,
  onExecuteRoute,
}) => {
  return (
    <View style={styles.gridContainer}>
      <Separator text="Map" />
      <View style={styles.buttonContainer}>
        <View style={styles.column}>
          <CustomCommandButton
            title={isScanning ? 'Stop Scan' : 'Start Scan'}
            onPress={onScanToggle}
            buttonStyle={isScanning ? styles.stopScanButton : styles.startScanButton}
          />
        </View>
        <View style={styles.column}>
          <CustomCommandButton
            title="Load"
            onPress={onLoadMap}
          />
        </View>
      </View>
      <Separator text="Markers" />
      <View style={styles.buttonContainer}>
        <View style={styles.column}>
          <CustomCommandButton
            title="Send"
            onPress={onSendLocation}
          />
        </View>
        <View style={styles.column}>
          <CustomCommandButton
            title="Reset"
            onPress={onResetMarkers}
          />
        </View>
      </View>
      <Separator text="Route" />
      <View style={styles.buttonContainer}>
        <View style={styles.column}>
          <CustomCommandButton
            title="Plan"
            onPress={onPlanRoute}
          />
        </View>
        <View style={styles.column}>
          <CustomCommandButton
            title="Execute"
            onPress={onExecuteRoute}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: '95%',
    marginBottom: 10,
  },
  column: {
    width: '45%',
  },
  startScanButton: {
    backgroundColor: 'green',
  },
  stopScanButton: {
    backgroundColor: 'red',
  },
});

export default ButtonGrid;