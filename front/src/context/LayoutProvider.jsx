import React, { createContext, useState } from "react";

const LayoutContext = createContext({});

export const LayoutProvider = ({ children }) => {
  const [top, setTop] = useState(false);
  return <LayoutContext.Provider value={{top,setTop}}>{children}</LayoutContext.Provider>;
};

export default LayoutContext;
