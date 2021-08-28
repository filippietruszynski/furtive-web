import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import DummyPrivateView from "./components/DummyPrivateView";
import PrivateRoute from "./components/PrivateRoute";

import { IPrivateRouteProps } from "./components/PrivateRoute/PrivateRoute";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [redirectPath, setRedirectPath] = useState<string>("/");

  const defaultPrivateRouteProps: IPrivateRouteProps = {
    isLoggedIn: isLoggedIn,
    logInPath: "/login",
    redirectPath: redirectPath,
    setRedirectPath: setRedirectPath,
  };

  return (
    <>
      IS LOGGED IN: {`${isLoggedIn}`}
      <br />
      REDIRECT PATH: {redirectPath && `"${redirectPath}"`}
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            {...defaultPrivateRouteProps}
            path="/dpv"
            component={DummyPrivateView}
            exact
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
