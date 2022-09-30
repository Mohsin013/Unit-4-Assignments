import React from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Stats  from "./Navbar.Styles";


const Status = () => {
  const { isAuth } = React.useContext(AuthContext);
  const [token, setToken] = React.useState("");

  const post = async () => {
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        })
      });
      let data = await res.json();
      console.log(data);
      setToken(data.token);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    post();
  }, [token]);

  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <span>Status: </span>
        <Stats color={isAuth}>{`${
          isAuth ? "Login successfull" : "Logout successfull"
        }`}</Stats>
      </div>
      <div>{`Token: ${isAuth ? token : "null"}`}</div>
    </>
  );
};

export default Status;