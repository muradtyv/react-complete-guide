import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email,password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggeDIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggeDIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
