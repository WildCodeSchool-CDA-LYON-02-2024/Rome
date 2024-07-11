import React, { createContext, useContext, useState } from "react";

const TechnologyContext = createContext();

export const useTechnology = () => useContext(TechnologyContext);

export const TechnologyProvider = ({ children }) => {
  const [userByIDTechnology, setUserByIDTechnology] = useState([]);
  
  const addTechnology = (technology) => {
    setUserByIDTechnology((prev) => [...prev, technology]);
  };

  return (
    <TechnologyContext.Provider value={{ userByIDTechnology, addTechnology}}>
      {children}
    </TechnologyContext.Provider>
  );
};