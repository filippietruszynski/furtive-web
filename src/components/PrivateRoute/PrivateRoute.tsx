import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export interface IPrivateRouteProps extends RouteProps {
  isLoggedIn: boolean;
  authenticationPath: string;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  isLoggedIn,
  authenticationPath,
  ...routeProps
}) => {
  if (isLoggedIn) {
    return <Route {...routeProps} />;
  }

  return <Redirect to={{ pathname: authenticationPath }} />;
};

export default PrivateRoute;
