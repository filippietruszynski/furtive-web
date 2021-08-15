import React from "react";

import Signup from "./components/Signup";
import Login from "./components/Login";

import { login, signup } from "./api/requests";

const App: React.FC = () => {
  return (
    <>
      <Signup signup={signup} />
      <Login login={login} />
    </>
  );
};

export default App;
