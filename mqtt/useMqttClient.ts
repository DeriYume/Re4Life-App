import { useRef } from "react";
import * as Paho from "paho-mqtt";

export const useMqttClient = (onImageLoaded: (base64Image: string) => void) => {
  const clientRef = useRef<Paho.Client | null>(null);
  const receivedChunksRef = useRef<Record<number, ArrayBuffer>>({});

  const connectClient = () => {
    const client = new Paho.Client('', 9001, ''); // Broker details go here - ip, port, id
    clientRef.current = client;

    client.connect({
      onSuccess() { client.subscribe('location/image'); },
    });

    client.onMessageArrived = (message: any) => {
      const payload = JSON.parse(message.payloadString);
      const { currentChunk, totalChunks, data } = payload;

      receivedChunksRef.current[currentChunk] = data;

      if (Object.keys(receivedChunksRef.current).length === totalChunks) {
        const chunkValues = Object.values(receivedChunksRef.current);
        const totalLength = chunkValues.reduce((acc, chunk) => acc + chunk.byteLength, 0);
        const completeImageData = new Uint8Array(totalLength);

        let offset = 0;
        chunkValues.forEach((chunk) => {
          completeImageData.set(new Uint8Array(chunk), offset);
          offset += chunk.byteLength;
        });

        const blob = new Blob([completeImageData], { type: 'image/jpeg' });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result as string;
          onImageLoaded(base64data);
          receivedChunksRef.current = {};
        };
      }
    };
  };

  const sendLocationCommand = (command: string) => {
    if (clientRef.current) {
      const message = new Paho.Message(JSON.stringify({ command }));
      message.destinationName = 'location/commands';
      clientRef.current.send(message);
    }
  };

  const sendLocationMarkers = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    if (clientRef.current) {
      const payload = {
        start: { id: 'S', x: start.x, y: start.y },
        end: { id: 'F', x: end.x, y: end.y },
      };
      const message = new Paho.Message(JSON.stringify(payload));
      message.destinationName = 'location/markers';
      clientRef.current.send(message);
    }
  };

  const disconnectClient = () => {
    if (clientRef.current) {
      clientRef.current.disconnect();
    }
  };

  return {
    connectClient,
    disconnectClient,
    sendLocationCommand,
    sendLocationMarkers,
  };
};
