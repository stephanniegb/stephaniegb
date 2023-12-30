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
};
export const CursorContext = createContext<ContextProp>({
  cursorText: "",
  setCursorText: () => {},
  setTopUnit: () => {},
  topUnit: 0,
  setCopied: () => {},
  copied: false,
  setCursor: () => {},
  cursor: { x: 0, y: 0 },
});

export const CursorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cursorText, setCursorText] = useState<string>("");
  const [topUnit, setTopUnit] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const contextValue = {
    cursorText,
    setCursorText,
    setTopUnit,
    topUnit,
    setCopied,
    copied,
    cursor,
    setCursor,
  };
  return (
    <CursorContext.Provider value={contextValue}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContext;
