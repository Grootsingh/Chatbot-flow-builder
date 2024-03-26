import React from "react";
import { Position, NodeProps, useNodeId, useEdges } from "reactflow";
import { MessageIcon, WhatsappIcon } from "../../../../icons";
import { useFlowNodeId } from "../../../../Hooks/NodeIdProviderWrapper";
import CustomHandle from "./CustomHandle";

export type MessageCardNodeData = {
  TextMessage: string;
};
export function MessageCardNode({ data }: NodeProps<MessageCardNodeData>) {
  const [nodeClicked, setNodeClicked] = React.useState(false);
  const [selectedNodeID, setSelectedNodeID] = useFlowNodeId();
  const ElementRef = React.useRef<HTMLDivElement>(null);
  const PrevEdgeListCount = React.useRef(2);
  const nodeID = useNodeId();
  const edgeList = useEdges();
  React.useEffect(() => {
    // deselect nodeclick when we click on
    // saveChanges btn | message back btn | somewhere in the ReactFlowContainer but not on node
    // we set selectedNodeID to be empty string
    if (selectedNodeID.length === 0 && nodeClicked) {
      setNodeClicked(false);
    }
  }, [selectedNodeID, nodeClicked]);

  React.useEffect(() => {
    const ReactFlowContainer = document.getElementById("ReactFlowContainer");
    function handleNode() {
      let currentActiveElement = document.activeElement
        ?.firstChild as HTMLElement;
      if (PrevEdgeListCount.current !== edgeList.length) {
        // early return when we are adding new nodes
        // so foucs and selected id doesn't change
        PrevEdgeListCount.current = edgeList.length;
        return;
      }
      if (currentActiveElement !== ElementRef.current) {
        // deselecting when we click on another node
        setNodeClicked(false);
      } else if (nodeID && currentActiveElement === ElementRef.current) {
        //adding id when we click on the node
        setSelectedNodeID(nodeID);
      }
    }
    ReactFlowContainer?.addEventListener("click", handleNode);
    return () => {
      ReactFlowContainer?.removeEventListener("click", handleNode);
    };
  }, [nodeClicked, edgeList.length]);
  return (
    <>
      <div
        id={"MessageCardNode"}
        onClick={() => {
          setNodeClicked(true);
        }}
        ref={ElementRef}
        data-selected={nodeClicked}
        className={`${
          nodeClicked
            ? "shadow-lightBlue ring-1 ring-blue-500"
            : "shadow-lightGray"
        } min-h-12 w-36 overflow-hidden rounded bg-white`}
      >
        <div className="h-5 px-2 flex items-center justify-between bg-sky-200">
          <div className="flex gap-[2px] items-center">
            <MessageIcon className="h-2 w-2" />
            <p className="font-bold text-xxs">Send Message</p>
          </div>
          <div className="h-3 w-3 grid place-content-center bg-white rounded-full -mr-[2px]">
            <WhatsappIcon className="h-[6px] w-[6px]" />
          </div>
        </div>
        <div className="p-2 text-xxs">
          <p className="overflow-hidden">{data?.TextMessage}</p>
        </div>
      </div>

      <CustomHandle type="source" position={Position.Right} sourceCount={1} />
      <CustomHandle type="target" position={Position.Left} />
    </>
  );
}
