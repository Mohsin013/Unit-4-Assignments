import React from "react";
import { AuthContext } from "../context/AuthContextProvider";

const NavBar = () => {
  const { isAuth, toggleAuth } = React.useContext(AuthContext);

  return (
    <>
      <div>NavBar</div>
      {isAuth ? (
        <button onClick={toggleAuth}>Log Out</button>
      ) : (
        <button onClick={toggleAuth}>Log In</button>
      )}
    </>
  );
};

export default NavBar;