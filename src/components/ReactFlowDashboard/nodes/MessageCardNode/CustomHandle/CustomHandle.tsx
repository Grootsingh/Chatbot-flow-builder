import { useMemo } from "react";

import {
  getConnectedEdges,
  Handle,
  HandleProps,
  useEdges,
  useNodeId,
} from "reactflow";
import useNodesMemo from "../../../../../Hooks/useNodesMemo";

type CustomHandlerProps = (
  | {
      sourceCount?: number;
      type: "source";
    }
  | {
      targetCount?: number;
      type: "target";
    }
) &
  Omit<HandleProps, "type">;

const CustomHandle = ({ ...props }: CustomHandlerProps) => {
  const nodeId = useNodeId();
  const nodeList = useNodesMemo();
  const edgeList = useEdges();
  const currentNode = nodeList.find((eachNode) => eachNode.id === nodeId);
  // if you provide TargetCount as prop
  if ("targetCount" in props) {
    const { targetCount, ...rest } = props;

    const isHandleTargetConnected = useMemo(() => {
      if (currentNode && targetCount) {
        const allEdges = getConnectedEdges([currentNode], edgeList);

        const targetList = allEdges.filter(
          (eachEdge) => eachEdge.source !== currentNode.id
        );
        return targetList.length < targetCount;
      } else {
        // default
        return true;
      }
    }, [nodeList.length, edgeList.length, targetCount]);

    return <Handle {...rest} isConnectable={isHandleTargetConnected} />;
  } else if ("sourceCount" in props) {
    // if you provide sourceCount as prop

    const { sourceCount, ...rest } = props;
    const isHandleSourceConnected = useMemo(() => {
      if (currentNode && sourceCount) {
        const allEdges = getConnectedEdges([currentNode], edgeList);
        const sourceList = allEdges.filter(
          (eachEdge) => eachEdge.target !== currentNode.id
        );
        return sourceList.length < sourceCount;
      } else {
        // default
        return true;
      }
    }, [nodeList.length, edgeList.length, sourceCount]);

    return <Handle {...rest} isConnectable={isHandleSourceConnected} />;
  } else {
    // if nither sourceCount or targetCount is provided
    // default
    return <Handle {...props} />;
  }
};

export default CustomHandle;
