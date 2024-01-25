"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextProp = {
  setCursorText: Dispatch<SetStateAction<string>>;
  cursorText: string;
  setTopUnit: Dispatch<SetStateAction<number>>;
  topUnit: number;
  setCopied: Dispatch<SetStateAction<boolean>>;
  copied: boolean;
  setCursor: Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  cursor: {
    x: number;
    y: number;
  };
  setTextColor: Dispatch<SetStateAction<string>>;
  textColor: string;
  opaque: boolean;
  setOpaque: Dispatch<SetStateAction<boolean>>;
};
export const GlobalContext = createContext<ContextProp>({
  cursorText: "",
  setCursorText: () => {},
  setTopUnit: () => {},
  topUnit: 0,
  setCopied: () => {},
  copied: false,
  setCursor: () => {},
  cursor: { x: 0, y: 0 },
  setTextColor: () => {},
  textColor: "",
  opaque: true,
  setOpaque: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [textColor, setTextColor] = useState("text-[#d0d0c5]");
  const [cursorText, setCursorText] = useState<string>("");
  const [topUnit, setTopUnit] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });
  const [opaque, setOpaque] = useState(true);

  const contextValue = {
    cursorText,
    setCursorText,
    setTopUnit,
    topUnit,
    setCopied,
    copied,
    cursor,
    setCursor,
    textColor,
    setTextColor,
    opaque,
    setOpaque,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
