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
};

export const ShaderContext = createContext<ContextProp>({
  isHovered: false,
  setIsHovered: () => {},
  setOffset: () => {},
  offset: {
    x: 0,
    y: 0,
  },
});

export const ShaderContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const contextValue = {
    isHovered,
    setIsHovered,
    offset,
    setOffset,
  };
  return (
    <ShaderContext.Provider value={contextValue}>
      {children}
    </ShaderContext.Provider>
  );
};
