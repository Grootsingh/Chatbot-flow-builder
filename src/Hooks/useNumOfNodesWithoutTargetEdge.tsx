import React from "react";
import { useEdges } from "reactflow";
import useNodesMemo from "./useNodesMemo";

function useNumOfNodesWithoutTargetEdge() {
  const [numOfNodesWithoutTargetEdge, setNumOfNodesWithoutTargetEdge] =
    React.useState<number>(1);
  const nodeList = useNodesMemo();
  const edgeList = useEdges();

  React.useEffect(() => {
    const arrayOfNodeWithoutAnyTargetAttached: string[] = [];
    nodeList.forEach((eachNode) => {
      const nodeHasAttachedTarget = edgeList.some((eachEdge) => {
        return eachNode.id === eachEdge.target;
      });

      if (!nodeHasAttachedTarget) {
        arrayOfNodeWithoutAnyTargetAttached.push(eachNode.id);
      }
    });

    setNumOfNodesWithoutTargetEdge(arrayOfNodeWithoutAnyTargetAttached.length);
  }),
    [edgeList.length, nodeList.length];

  return numOfNodesWithoutTargetEdge;
}

export default useNumOfNodesWithoutTargetEdge;
