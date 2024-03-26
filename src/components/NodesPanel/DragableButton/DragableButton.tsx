import React from "react";
import { useReactFlow } from "reactflow";

interface DragableButtonProps {
  CardButton: React.ElementType;
  CardNodeId: string;
  addDroppedPosition: (prop: object) => void;
}

interface XYPosition {
  x: number;
  y: number;
}

function DragableButton({
  CardButton,
  addDroppedPosition,
  CardNodeId,
}: DragableButtonProps) {
  const [isClicked, setIsClicked] = React.useState(false);
  const reactFlowInstance = useReactFlow();
  const PositionRef = React.useRef<XYPosition | object>({});
  const Id = React.useId();
  const DragableId = "dragableElement" + Id;

  // transforming screen position into reactflow canvas positions.
  React.useEffect(() => {
    if (isClicked === false && "x" in PositionRef.current) {
      const transformScreenToFlow = reactFlowInstance.screenToFlowPosition(
        PositionRef?.current
      );
      // adding to Reactflow later
      addDroppedPosition(transformScreenToFlow);
    }
  }, [isClicked]);

  React.useEffect(() => {
    if (isClicked) {
      const ReactFlowContainer = document.getElementById("ReactFlowContainer");
      // to know the cardNode dimension so that when ever we drop the card into canas
      // the card will be dropped from the center.
      const CardNode = document.getElementById(CardNodeId);
      const CardNodeReact = CardNode?.getBoundingClientRect();
      // to know the MessageCard dimension
      // the card will be pickedUp from the center.
      const DragableElement = document.getElementById(DragableId);
      const DragableElementReact = DragableElement?.getBoundingClientRect();

      function handleElementMovement(event: MouseEvent) {
        if (DragableElement && DragableElementReact) {
          let xPosition =
            event.clientX -
            (Math.round(DragableElementReact.x) +
              DragableElementReact.width / 2);

          let yPosition =
            event.clientY -
            (Math.round(DragableElementReact.y) +
              DragableElementReact.height / 2);

          DragableElement.style.top = `${yPosition}px`;
          DragableElement.style.left = `${xPosition}px`;

          const mouseOverReactFlowContainer = ReactFlowContainer?.contains(
            document.elementsFromPoint(event.pageX, event.pageY)[3]
          );
          // Pointer is overReactFlowContainer while dropping MessageCard
          if (mouseOverReactFlowContainer && CardNodeReact) {
            PositionRef.current = {
              x: event.clientX - CardNodeReact.width / 2,
              y: event.clientY - CardNodeReact.height / 2,
            };
            DragableElement.style.cursor = "pointer";
          } else {
            // Pointer is outside the boundary of ReactFlowContainer
            // don't pick the pointer cordinates
            PositionRef.current = {};
            DragableElement.style.cursor = "not-allowed";
          }
        }
      }

      DragableElement?.addEventListener("mousemove", handleElementMovement);
      return () => {
        DragableElement?.removeEventListener(
          "mousemove",
          handleElementMovement
        );
        // reseting the MessageCard position to it's original position

        if (DragableElement) {
          DragableElement.style.top = `0px`;
          DragableElement.style.left = `0px`;
          DragableElement.style.cursor = "pointer";
        }
      };
    }
  }, [isClicked]);

  return (
    <>
      <div className="relative">
        <div
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
          id={DragableId}
          className="absolute hover:cursor-pointer "
        >
          <div className="select-none">
            <CardButton />
          </div>
        </div>
        <div className="select-none">
          <CardButton />
        </div>
      </div>
    </>
  );
}

export default DragableButton;
