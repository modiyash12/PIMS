import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("authToken"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/"); 
    }
  }, [isLoggedIn, navigate]);

  const logout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  const login = (token,role,piuCode) => {
    sessionStorage.setItem('authToken', token);
    sessionStorage.setItem('role', role);
    sessionStorage.setItem('piuCode', piuCode);
    setIsLoggedIn(true);
  };

  return (
    <SessionContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};
