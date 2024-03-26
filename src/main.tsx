import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { NodeIdProviderWrapper } from "./Hooks/NodeIdProviderWrapper";
import { ReactFlowProvider } from "reactflow";

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(
  <NodeIdProviderWrapper>
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  </NodeIdProviderWrapper>
);
