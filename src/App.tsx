import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chat from "./views/Chat";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import LandingPage from "./views/LandingPage";
import PrivateRoute from "./components/PrivateRoute";

import { IPrivateRouteProps } from "./components/PrivateRoute/PrivateRoute";

const App: React.FC = () => {
  const [redirectPath, setRedirectPath] = useState("");

  const defaultPrivateRouteProps: IPrivateRouteProps = {
    isAuthenticated: false,
    authenticationPath: "/login",
    redirectPath: redirectPath,
    setRedirectPath: setRedirectPath,
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <PrivateRoute
          {...defaultPrivateRouteProps}
          path="/chat"
          component={Chat}
        />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
