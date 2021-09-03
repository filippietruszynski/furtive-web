import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import DummyPrivateView from "./components/DummyPrivateView";
import LogIn from "./components/LogIn";
import PrivateRoute from "./components/PrivateRoute";

import { IPrivateRouteProps } from "./components/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp";

const App: React.FC = () => {
  // const defaultPrivateRouteProps: IPrivateRouteProps = {
  //   isLoggedIn: isLoggedIn,
  //   logInPath: "/login",
  //   redirectPath: redirectPath,
  //   setRedirectPath: setRedirectPath,
  // };

  return (
    <>
      {process.env.SZOT}
      <LogIn />
      <SignUp />

      {/* <BrowserRouter>
        <Switch>
          <PrivateRoute
            {...defaultPrivateRouteProps}
            path="/dpv"
            component={DummyPrivateView}
            exact
          />
        </Switch>
      </BrowserRouter> */}
    </>
  );
};

export default App;
