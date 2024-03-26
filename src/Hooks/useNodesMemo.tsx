import React from "react";
import { Node, useStoreApi } from "reactflow";
import { initialNodes } from "../components/ReactFlowDashboard/nodes";

// useNodes() will re-render everytime Nodes are moved,selected, added
// useNodesMemo() will re-render everytime Nodes are selected, added
function useNodesMemo() {
  const [nodeList, setNodeList] = React.useState<Node[]>(initialNodes);
  let store = useStoreApi();
  const internalstate = store.getState()?.nodeInternals?.size;

  React.useEffect(() => {
    const unsubscribe = store.subscribe((currState) => {
      if (nodeList.length < currState.nodeInternals.size) {
        let nodeArr: Node[] = [...currState.nodeInternals.values()];
        setNodeList(nodeArr);
      }
    });

    return () => unsubscribe();
  }, [internalstate]);

  return nodeList;
}

export default useNodesMemo;
