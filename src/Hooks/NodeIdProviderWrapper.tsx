import React from "react";

import { createRequiredContext } from "./createRequiredContext";

export const [useFlowNodeId, NodeIdProvider] =
  createRequiredContext<
    readonly [string, React.Dispatch<React.SetStateAction<string>>]
  >();

export function NodeIdProviderWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  const [state, setState] = React.useState("");

  const memoState = React.useMemo(() => {
    return [state, setState] as const;
  }, [state]);

  return <NodeIdProvider value={memoState}>{children}</NodeIdProvider>;
}
