"use client";
import { createContext, useContext } from "react";

const WheelContext = createContext({});

export function useWheelContext() {
  return useContext(WheelContext);
}

export default function WheelProvider({ children }) {
  return <WheelContext.Provider value={{}}>{children}</WheelContext.Provider>;
}
