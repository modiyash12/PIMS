import React, { createContext, useState, useContext } from 'react';

const HeaderContext = createContext();

export const useHeader = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }) => {
  const [title, setTitle] = useState("Admin Dashboard");
  const [formTitle, setFormTitle] = useState("");
  const [loadApi,setLoadApi]=useState(false);

  const addTitle = (value) => {
    setTitle(value);
  };

  const addFormTitle = (value) => {
    setFormTitle(value);
  };

  return (
    <HeaderContext.Provider value={{ title, addTitle, formTitle, addFormTitle,loadApi,setLoadApi}}>
      {children}
    </HeaderContext.Provider>
  );
};
