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
      {/* LANDING PAGE */}
      <PublicRoute
        path={RoutePaths.LANDING_PAGE}
        exact
        isAuthenticated={isAuthenticated}
        redirectPath={RoutePaths.LOGIN}
      >
        <LandingPage />
      </PublicRoute>

      {/* CHAT */}
      <ProtectedRoute
        path={RoutePaths.CHAT}
        isAuthenticated={isAuthenticated}
        authenticationPath={RoutePaths.LOGIN}
      >
        <Chat />
      </ProtectedRoute>

      {/* LOG IN */}
      <PublicRoute
        path={RoutePaths.LOGIN}
        isAuthenticated={isAuthenticated}
        redirectPath={RoutePaths.CHAT}
        restricted
      >
        <LogIn />
      </PublicRoute>

      {/* SIGN UP */}
      <PublicRoute
        path={RoutePaths.SIGNUP}
        isAuthenticated={isAuthenticated}
        redirectPath={RoutePaths.CHAT}
        restricted
      >
        <SignUp />
      </PublicRoute>

      {/* NOT FOUND */}
      <PublicRoute path={RoutePaths.NOT_FOUND}>
        <NotFound />
      </PublicRoute>
    </Switch>
  );
};

export default App;
