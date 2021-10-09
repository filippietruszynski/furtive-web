import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export interface IProtectedRouteProps extends RouteProps {
  isLoggedIn: boolean;
  authenticationPath: string;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({
  isLoggedIn,
  authenticationPath,
  ...routeProps
}) => {
  if (isLoggedIn) {
    return <Route {...routeProps} />;
  }

  return <Redirect to={{ pathname: authenticationPath }} />;
};

export default ProtectedRoute;
