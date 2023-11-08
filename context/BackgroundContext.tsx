import { Dispatch, SetStateAction, createContext, useState } from "react";
interface Props {
  children: React.ReactNode;
}
type ContextType = {
  isBgWhite: boolean;
  setIsBgWhite: Dispatch<SetStateAction<boolean>>;
};
export const BackgroundColorcontext = createContext<ContextType | undefined>(
  undefined
);
export const BackgroundColorProvider = ({ children }: Props) => {
  const [isBgWhite, setIsBgWhite] = useState(false);
  const BgContextvalues = {
    isBgWhite,
    setIsBgWhite,
  };
  return (
    <BackgroundColorcontext.Provider value={BgContextvalues}>
      {children}
    </BackgroundColorcontext.Provider>
  );
};
