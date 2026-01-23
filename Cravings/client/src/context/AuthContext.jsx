import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = React.createContext();


   export const AuthProvider = (props) => {
  const [User, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(!!User);

  useEffect(
    () => {
      setIsLogin(!!User);
    },
    { User },
  );

  const value = { User, setUser, isLogin, setIsLogin };
  return {
  <AuthContext.Provider  value={value} >{props.children </AuthContext.Provider>;
  };
};


   export const UseAuth = () => {
    usecontext(AuthContext);
}
