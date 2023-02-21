import React, { useContext, useEffect } from "react";

import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ctx  = useContext(AuthContext);  
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
      </main>
    </React.Fragment>
  );
}

export default App;
