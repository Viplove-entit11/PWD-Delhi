import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sample, setSample] = useState();
  return (
    <AppContext.Provider value={{ sample, setSample }}>
      {children}
    </AppContext.Provider>
  );
};


export default AppProvider;
