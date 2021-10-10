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
        redirectPath={RoutePaths.LOGIN}
        isAuthenticated={isAuthenticated}
        exact
      >
        <LandingPage />
      </PublicRoute>

      {/* CHAT */}
      <ProtectedRoute
        path={RoutePaths.CHAT}
        authenticationPath={RoutePaths.LOGIN}
        isAuthenticated={isAuthenticated}
      >
        <Chat />
      </ProtectedRoute>

      {/* LOG IN */}
      <PublicRoute
        path={RoutePaths.LOGIN}
        redirectPath={RoutePaths.CHAT}
        isAuthenticated={isAuthenticated}
        restricted
      >
        <LogIn />
      </PublicRoute>

      {/* SIGN UP */}
      <PublicRoute
        path={RoutePaths.SIGNUP}
        redirectPath={RoutePaths.CHAT}
        isAuthenticated={isAuthenticated}
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
