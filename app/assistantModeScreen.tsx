import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

// Define a type for the detected object structure
type DetectedObject = {
  label: string;
  coordinates: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

const AssistantModeScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([]);
  const [selectedObject, setSelectedObject] = useState<DetectedObject | null>(null);
  
  const devices = useCameraDevices();
  const device = devices.back;

  // Request Camera Permissions
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      setHasPermission(cameraPermission === "authorized");
    })();
  }, []);

  // Function to handle sending the image URL to the Flask API
  const processImageWithAPI = async (imageUrl: string) => {
    try {
      const response = await fetch('http://<your-server-ip>:5353/process-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: imageUrl,  // Pass the URL of the image
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assume the API returns labels and confidence scores for the detected objects
        console.log('Detection completed:', data);
        const detectedObjectsFromAPI = data.labels.map((label: string, index: number) => ({
          label,
          coordinates: {
            x: 100,  // Dummy coordinates for now, update with actual data if available
            y: 100,
            width: 100,
            height: 100,
          },
        }));

        setDetectedObjects(detectedObjectsFromAPI);
      } else {
        Alert.alert('Error', data.error || 'Something went wrong');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server: ');
    }
  };

  const handleObjectClick = (object: DetectedObject) => {
    console.log("Object clicked:", object);
    setSelectedObject(object);

    // Here you would pass the selected object to your tracking API
  };

  if (device == null || !hasPermission) {
    return <Text>Waiting for camera permission...</Text>;
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Camera feed */}
      <Camera
        style={StyleSheet.absoluteFillObject}
        device={device}
        isActive={true}
        frameProcessorFps={5} // Adjust this based on performance needs
      />

      {/* Overlay bounding boxes */}
      {detectedObjects.map((object, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleObjectClick(object)}
          style={[
            styles.boundingBox,
            {
              left: object.coordinates.x,
              top: object.coordinates.y,
              width: object.coordinates.width,
              height: object.coordinates.height,
            },
          ]}
        >
          <Text style={styles.label}>{object.label}</Text>
        </TouchableOpacity>
      ))}

      {/* Example button to trigger image processing */}
      <TouchableOpacity
        onPress={() => processImageWithAPI("http://your-esp-camera-ip/capture")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Process Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boundingBox: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    backgroundColor: 'rgba(0, 255, 0, 0.7)',
    color: 'white',
    padding: 2,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AssistantModeScreen;
