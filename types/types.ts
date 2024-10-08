import * as Paho from "paho-mqtt";

export interface Marker {
  id: string;
  x: number;
  y: number;
  color: string;
}

export interface Topic {
  topicName: string;
  onMessageArrived: (message: Paho.Message) => void;
}

export interface ReceivedChunk {
  chunks: ArrayBuffer;
}