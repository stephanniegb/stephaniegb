import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextProp = {
  isHovered: boolean;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  setOffset: Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  offset: {
    x: number;
    y: number;
  };
  setMouse: Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  mouse: {
    x: number;
    y: number;
  };
};

export const ShaderContext = createContext<ContextProp>({
  isHovered: false,
  setIsHovered: () => {},
  setOffset: () => {},
  offset: {
    x: 0,
    y: 0,
  },
  setMouse: () => {},
  mouse: {
    x: -1,
    y: 1,
  },
});

export const ShaderContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: -0.5, y: 0.5 });
  const contextValue = {
    isHovered,
    setIsHovered,
    offset,
    setOffset,
    mouse,
    setMouse,
  };
  return (
    <ShaderContext.Provider value={contextValue}>
      {children}
    </ShaderContext.Provider>
  );
};
