import { useFlowNodeId } from "../../Hooks/NodeIdProviderWrapper";
import DragableButton from "./DragableButton";
import MessageCardButton from "./MessageCardButton";
import { updateTextProps } from "../../App";
import NodeInputBox from "./NodeInputBox";

export interface NodePanelProps {
  addDroppedPosition: (prop: object) => void;
  provideUpdatedText: (props: updateTextProps) => void;
  saveChangesClicked: boolean;
}

function NodesPanel({
  addDroppedPosition,
  provideUpdatedText,
  saveChangesClicked,
}: NodePanelProps) {
  const [selectedNodeID] = useFlowNodeId();

  return (
    <div className="w-64 border border-gray-300 bg-white">
      {selectedNodeID ? (
        <NodeInputBox
          provideUpdatedText={provideUpdatedText}
          saveChangesClicked={saveChangesClicked}
        />
      ) : (
        <div className="m-4 ">
          <DragableButton
            addDroppedPosition={addDroppedPosition}
            CardButton={MessageCardButton}
            CardNodeId="MessageCardNode"
          />
        </div>
      )}
    </div>
  );
}

export default NodesPanel;
