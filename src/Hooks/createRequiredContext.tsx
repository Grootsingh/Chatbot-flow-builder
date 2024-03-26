import React from "react";

export const createRequiredContext = <T,>() => {
  const context = React.createContext<T | null>(null);

  const useContext = () => {
    const contextValue = React.useContext(context);

    if (contextValue === null) {
      throw new Error("Context value is null");
    }

    return contextValue;
  };

  return [useContext, context.Provider] as const;
};
