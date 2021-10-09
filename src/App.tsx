import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Chat from "./views/Chat";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";
import LandingPage from "./views/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";

import { selectIsUserLogged } from "./store/selectors/auth.selectors";
import { IProtectedRouteProps } from "./components/ProtectedRoute/ProtectedRoute";

const App: React.FC = () => {
  const isLoggedIn = useSelector(selectIsUserLogged);

  const defaultProtectedRouteProps: IProtectedRouteProps = {
    isLoggedIn: isLoggedIn,
    authenticationPath: "/login",
  };

  return (
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <ProtectedRoute
        {...defaultProtectedRouteProps}
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
