import React from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const toggleAuth = () => {
    setIsAuth(isAuth ? false : true);
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };