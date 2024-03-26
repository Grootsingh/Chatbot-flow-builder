import React from "react";
import Header from "./components/Header";
import NodesPanel from "./components/NodesPanel";
import ReactFlowDashboard from "./components/ReactFlowDashboard";
import { useFlowNodeId } from "./Hooks/NodeIdProviderWrapper";

export interface updateTextProps {
  id: string;
  Text: string;
}

export default function App() {
  const [droppedPosition, setDroppedPosition] = React.useState({});
  const [saveChangesClicked, setSaveChangesClicked] = React.useState(false);
  const [updateText, setUpdateText] = React.useState({ id: "", Text: "" });
  const [_, setselectedNodeID] = useFlowNodeId();

  function addDroppedPosition(cardDroppedPosition: object) {
    setDroppedPosition({ ...cardDroppedPosition });
  }

  function TrueSaveChangesTriggers() {
    setSaveChangesClicked(true);
  }

  // when we the Unselect the savechange btn
  // deselect the current node
  function FalseSaveChangesTriggers() {
    setSaveChangesClicked(false);
    setselectedNodeID("");
  }
  // update the text of already exisited node
  // deslect savechange btn
  function provideUpdatedText(newData: updateTextProps) {
    setUpdateText(newData);
    FalseSaveChangesTriggers();
  }

  return (
    <div className="h-full overflow-hidden">
      <Header TrueSaveChangesTriggers={TrueSaveChangesTriggers} />
      <div className={`flex h-[calc(100%-2.5rem)] w-full`}>
        <ReactFlowDashboard
          droppedPosition={droppedPosition}
          updateText={updateText}
        />
        <NodesPanel
          provideUpdatedText={provideUpdatedText}
          saveChangesClicked={saveChangesClicked}
          addDroppedPosition={addDroppedPosition}
        />
      </div>
    </div>
  );
}
