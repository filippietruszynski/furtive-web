import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Chat from "./views/Chat";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";
import LandingPage from "./views/LandingPage";
import PrivateRoute from "./components/PrivateRoute";

import { selectIsUserLogged } from "./store/selectors/auth.selectors";
import { IPrivateRouteProps } from "./components/PrivateRoute/PrivateRoute";

const App: React.FC = () => {
  const isLoggedIn = useSelector(selectIsUserLogged);

  const defaultPrivateRouteProps: IPrivateRouteProps = {
    isLoggedIn: isLoggedIn,
    authenticationPath: "/login",
  };

  return (
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <PrivateRoute
        {...defaultPrivateRouteProps}
        path="/chat"
        component={Chat}
      />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
