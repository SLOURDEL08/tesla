// SecondSectionContext.js
import React, { createContext, useContext, useState } from 'react';
import './App.css';


const SecondSectionContext = createContext();

export function SecondSectionProvider({ children }) {
  const [isSecondSectionHovered, setIsSecondSectionHovered] = useState(false);

  return (
    <SecondSectionContext.Provider value={{ isSecondSectionHovered, setIsSecondSectionHovered }}>
      {children}
    </SecondSectionContext.Provider>
  );
}

export function useSecondSection() {
  return useContext(SecondSectionContext);
}
