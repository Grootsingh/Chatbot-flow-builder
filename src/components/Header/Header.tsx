import React from "react";

import useNodesMemo from "../../Hooks/useNodesMemo";
import useNumOfNodesWithoutTargetEdge from "../../Hooks/useNumOfNodesWithoutTargetEdge";
import TostPopUp from "../TostPopUp";

interface HeaderProps {
  TrueSaveChangesTriggers: () => void;
}

function Header({ TrueSaveChangesTriggers }: HeaderProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const numOfNodesWithoutTargetEdge = useNumOfNodesWithoutTargetEdge();
  const nodeList = useNodesMemo();
  const prevNodeLength = React.useRef(0);

  function FalseisVisible() {
    setIsVisible(false);
  }

  // show TostPopUp for 5 sec
  React.useEffect(() => {
    if (isVisible) {
      let timerID: number;

      timerID = setTimeout(() => {
        FalseisVisible();
      }, 5 * 1000);

      return () => clearInterval(timerID);
    }
  }, [numOfNodesWithoutTargetEdge, isVisible]);

  // we Hide Current TostPopUp
  React.useEffect(() => {
    if (numOfNodesWithoutTargetEdge <= 1) {
      // when ever numOfNodesWithoutTargetEdge <= 1 (To hide the error message)
      FalseisVisible();
    } else if (prevNodeLength.current < nodeList.length) {
      // when ever new node is added (To hide sucess message)
      FalseisVisible();
      prevNodeLength.current = nodeList.length;
    }
  }, [numOfNodesWithoutTargetEdge]);

  // only update the NodeValue when
  // numOfNodesWithoutTargetEdge <= 1
  React.useEffect(() => {
    if (
      isVisible &&
      numOfNodesWithoutTargetEdge &&
      numOfNodesWithoutTargetEdge <= 1
    ) {
      TrueSaveChangesTriggers();
    }
  }, [isVisible]);

  // state change
  function handleVisibilityChange() {
    setIsVisible(true);
    // when we click on Save Changes btn again when TostPopUp is still visible
    if (isVisible) {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 0);
    }
  }

  return (
    <div className="h-10  flex items-center bg-gray-100">
      <div className="w-64  absolute right-0  flex items-center justify-center">
        <button
          onClick={handleVisibilityChange}
          className="h-6 w-28 border hover:bg-blue-50 border-blue-800 bg-white text-xs text-blue-700 rounded  font-bold"
        >
          Save Changes
        </button>
      </div>
      {isVisible &&
      numOfNodesWithoutTargetEdge &&
      numOfNodesWithoutTargetEdge > 1 ? (
        <TostPopUp status="error">
          Error: Can't Save Flow, Unconnected Nodes Detected.
        </TostPopUp>
      ) : undefined}
      {isVisible &&
      numOfNodesWithoutTargetEdge &&
      numOfNodesWithoutTargetEdge <= 1 ? (
        <TostPopUp status="success">Flow Saved Sucessfully</TostPopUp>
      ) : undefined}
    </div>
  );
}

export default Header;
