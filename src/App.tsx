import React from "react";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Chat from "./views/Chat";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";
import LandingPage from "./views/LandingPage";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import { RoutePaths } from "./utils/enums";
import { selectIsUserAuthenticated } from "./store/selectors/auth.selectors";

const App: React.FC = () => {
  const isAuthenticated = useSelector(selectIsUserAuthenticated);

  return (
    <Switch>
      <PublicRoute
        path={RoutePaths.LANDING_PAGE}
        component={LandingPage}
        exact
        isAuthenticated={isAuthenticated}
        redirectPath={RoutePaths.LOGIN}
      />

      <ProtectedRoute
        path={RoutePaths.CHAT}
        component={Chat}
        isAuthenticated={isAuthenticated}
        authenticationPath={RoutePaths.LOGIN}
      />

      <PublicRoute
        path={RoutePaths.LOGIN}
        component={LogIn}
        isAuthenticated={isAuthenticated}
        redirectPath={RoutePaths.CHAT}
        restricted
      />

      <PublicRoute
        path={RoutePaths.SIGNUP}
        component={SignUp}
        isAuthenticated={isAuthenticated}
        redirectPath={RoutePaths.CHAT}
        restricted
      />

      <PublicRoute path={RoutePaths.NOT_FOUND} component={NotFound} />
    </Switch>
  );
};

export default App;
