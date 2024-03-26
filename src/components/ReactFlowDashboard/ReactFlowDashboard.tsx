import type { Node, OnConnect } from "reactflow";

import { useCallback, useEffect } from "react";

import {
  Controls,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { updateTextProps } from "../../App";
import { useFlowNodeId } from "../../Hooks/NodeIdProviderWrapper";

interface ReactFlowDashboardProps {
  droppedPosition: { x: number; y: number } | object;
  updateText: updateTextProps;
}

function ReactFlowDashboard({
  droppedPosition,
  updateText,
}: ReactFlowDashboardProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [_, setselectedNodeID] = useFlowNodeId();

  // updating Edgelist with newly connected Edge
  const onConnect: OnConnect = useCallback(
    (connection) =>
      setEdges((edges) => {
        const newEdge = {
          id: `${connection.source}->${connection.target}`,
          ...connection,
        };
        return addEdge(newEdge, edges);
      }),
    []
  );
  useEffect(() => {
    // if we don't click on Node then
    // selectedId = ""
    // which implies NodeClicked = false
    const ReactFlowContainer = document.getElementById("ReactFlowContainer");
    function setIdForUpdatingText() {
      if (ReactFlowContainer) {
        setTimeout(() => {
          let selectedNode = ReactFlowContainer.querySelector(
            `[data-selected="true"]`
          );
          if (!selectedNode) {
            setselectedNodeID("");
          }
        }, 0);
      }
    }

    ReactFlowContainer?.addEventListener("click", setIdForUpdatingText);
    return () => {
      ReactFlowContainer?.removeEventListener("click", setIdForUpdatingText);
    };
  }, []);

  // adding new node to nodeList with newPosition
  useEffect(() => {
    if ("x" in droppedPosition) {
      const newNode = {
        id: String(crypto.randomUUID()),
        type: "messageNode",
        position: droppedPosition,
        data: { TextMessage: "Thanks for hiring me." },
      };

      setNodes((currNodes) => [...currNodes, newNode]);
    }
  }, [droppedPosition]);

  // updating exsiting Node with new text
  useEffect(() => {
    const oldNodeData = nodes.find(
      (eachNode) => eachNode.id === updateText.id
    ) as Node | undefined;

    const restOfTheNodes: Node[] = nodes.filter(
      (eachNode) => eachNode.id !== updateText.id
    );

    if (oldNodeData) {
      const updateNodeData = {
        ...oldNodeData,
        data: { TextMessage: updateText.Text },
      };
      setNodes([...restOfTheNodes, updateNodeData]);
    }
  }, [updateText]);

  return (
    <div id="ReactFlowContainer" className="flex-1">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default ReactFlowDashboard;

//
// useEffect(() => {
//   function setIdForUpdatingText() {
//     const ReactFlowContainer = document.getElementById("ReactFlowContainer");
//     if (ReactFlowContainer) {
//       setTimeout(() => {
//         let selectedNode = ReactFlowContainer.querySelector(
//           `[data-selected="true"]`
//         );
//         if (selectedNode) {
//           const flowNodeId =
//             selectedNode.parentElement?.getAttribute("data-id") ?? "";
//           setSelectedNodeID(flowNodeId);
//           console.log("dashboard", flowNodeId);
//         }
//       }, 0);
//     }
//   }

//   document.addEventListener("click", setIdForUpdatingText);
//   return () => {
//     document.removeEventListener("click", setIdForUpdatingText);
//   };
// }, []);
