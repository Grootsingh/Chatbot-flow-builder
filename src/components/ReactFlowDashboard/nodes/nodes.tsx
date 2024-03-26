import type { Node, NodeTypes } from "reactflow";
import { MessageCardNode } from "./MessageCardNode";

export const initialNodes = [
  {
    id: "a",
    type: "messageNode",
    position: { x: -267, y: -256 },
    data: { TextMessage: "so tell me Your Name?" },
  },
  {
    id: "b",
    type: "messageNode",
    position: { x: -230, y: -183 },
    data: { TextMessage: "I am Hired." },
  },
  {
    id: "c",
    type: "messageNode",
    position: { x: -120, y: -108 },
    data: { TextMessage: "You are Hired!!!" },
  },
] satisfies Node[];

// Add any of your custom nodes here!
export const nodeTypes = {
  messageNode: MessageCardNode,
} satisfies NodeTypes;
