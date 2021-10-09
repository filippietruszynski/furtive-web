import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export interface IProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}) => {
  if (!isAuthenticated) {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }

  return <Route {...routeProps} />;
};

export default ProtectedRoute;
