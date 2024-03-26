import * as React from "react";
import { updateTextProps } from "../../../App";
import { useFlowNodeId } from "../../../Hooks/NodeIdProviderWrapper";
import { ArrowLeftIcon } from "../../../icons";
import { useNodes } from "reactflow";

interface NodeObj {
  data: { TextMessage: string };
  id: string;
}

interface NodeInputTextProps {
  provideUpdatedText: (props: updateTextProps) => void;
  saveChangesClicked: boolean;
}
function NodeInputBox({
  provideUpdatedText,
  saveChangesClicked,
}: NodeInputTextProps) {
  const [input, setInput] = React.useState("");
  const [selectedNodeID, setselectedNodeID] = useFlowNodeId();
  const FlowNodeList = useNodes();

  // when saveChange btn is clicked add the text to node
  React.useEffect(() => {
    if (saveChangesClicked) {
      provideUpdatedText({ id: selectedNodeID, Text: input });
    }
  }, [saveChangesClicked]);

  // getting the currentValue from the SelectedNode
  // setting into the textarea
  React.useEffect(() => {
    if (selectedNodeID) {
      const selectedNode = FlowNodeList.find(
        (eachNode) => eachNode.id === selectedNodeID
      ) as NodeObj | undefined;
      if (selectedNode) {
        const selectedNodeText = selectedNode.data["TextMessage"] ?? "";
        setInput(selectedNodeText);
      }
    }
  }, [selectedNodeID]);

  return (
    <div className="w-full">
      <div className="h-12 px-4 flex items-center border-b border-gray-300 justify-between">
        <button onClick={() => setselectedNodeID("")} className="flex-1">
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <p className="font-semibold text-sm ">Message</p>
        <span className="flex-1"></span>
      </div>
      <div className="m-2">
        <p className="font-semibold  text-gray-300 mb-2">Text</p>
        <textarea
          name="textInput"
          value={input}
          placeholder="Text..."
          onChange={(event) => setInput(event.target.value)}
          className={`focus-within:ring-2 p-1 focus-within:ring-gray-400 w-full border outline-none  rounded-md border-gray-300 h-28`}
        />
      </div>
    </div>
  );
}

export default NodeInputBox;
