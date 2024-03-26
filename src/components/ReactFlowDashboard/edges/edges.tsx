import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  { id: "a->b", source: "a", target: "b" },
  { id: "b->c", source: "b", target: "c" },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
