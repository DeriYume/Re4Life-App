import React, { useState } from "react";
import { Modal, View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

type SettingsScreenProps = {
  visible: boolean;
  onClose: () => void;
};

function SettingsScreen(props: SettingsScreenProps): JSX.Element {
  const { visible, onClose } = props;
  const [leftHand, setLeftHand] = useState(true);
  const [movementSensitivity, setMovementSensitivity] = useState(0.8);
  const [audio, setAudio] = useState(0.5);
  const [micVolume, setMicVolume] = useState(1);
  const [emergencyStop, setEmergencyStop] = useState(false);
  const [enableMic, setEnableMic] = useState(true);
  const [autoCamera, setAutoCamera] = useState(true);
  const [dangerIndicators, setDangerIndicators] = useState(true);

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.handButtons}>
            <TouchableOpacity style={[styles.button, leftHand && styles.activeButton]} onPress={() => setLeftHand(true)}>
              <Text style={[styles.buttonText, leftHand && styles.activeButtonText]}>Left Hand</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, !leftHand && styles.activeButton]} onPress={() => setLeftHand(false)}>
              <Text style={[styles.buttonText, !leftHand && styles.activeButtonText]}>Right Hand</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.label}>Movement Sensitivity</Text>
          <Slider style={styles.slider} value={movementSensitivity} onValueChange={setMovementSensitivity} />
          
          <Text style={styles.label}>Audio</Text>
          <Slider style={styles.slider} value={audio} onValueChange={setAudio} />
          
          <Text style={styles.label}>Microphone Volume</Text>
          <Slider style={styles.slider} value={micVolume} onValueChange={setMicVolume} />
          
          <View style={styles.switchRow}>
            <Text style={styles.label}>Emergency Stop Button</Text>
            <Switch value={emergencyStop} onValueChange={setEmergencyStop} />
          </View>
          
          <View style={styles.switchRow}>
            <Text style={styles.label}>Microphone</Text>
            <Switch value={enableMic} onValueChange={setEnableMic} />
          </View>
          
          <View style={styles.switchRow}>
            <Text style={styles.label}>Auto Camera Recording</Text>
            <Switch value={autoCamera} onValueChange={setAutoCamera} />
          </View>
          
          <View style={styles.switchRow}>
            <Text style={styles.label}>Danger Indicators</Text>
            <Switch value={dangerIndicators} onValueChange={setDangerIndicators} />
          </View>
          
          <TouchableOpacity style={styles.disconnectButton} onPress={onClose}>
            <Text style={styles.disconnectText}>Disconnect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#A1BAC9',
    borderRadius: 20,
    width: '80%',
    maxWidth: 400,
    alignItems: 'stretch',
    padding: 20,
  },
  handButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    elevation: 5,
    marginHorizontal: 5,
    padding: 10,
  },
  activeButton: {
    backgroundColor: '#009FE3',
    elevation: 0,
  },
  buttonText: {
    textAlign: 'center',
    color: '#444C52',
  },
  activeButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  disconnectButton: {
    borderRadius: 5,
    backgroundColor: '#009FE3',
    padding: 5
  },
  disconnectText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SettingsScreen;