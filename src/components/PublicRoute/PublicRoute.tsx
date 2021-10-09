import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { RoutePaths } from "../../utils/enums";
export interface IPublicRouteProps extends RouteProps {
  isAuthenticated?: boolean;
  redirectPath?: string;
  restricted?: boolean;
}

const PublicRoute: React.FC<IPublicRouteProps> = ({
  isAuthenticated = false,
  redirectPath = RoutePaths.CHAT,
  restricted = false,
  ...routeProps
}) => {
  if (isAuthenticated && restricted) {
    return <Redirect to={{ pathname: redirectPath }} />;
  }

  return <Route {...routeProps} />;
};

export default PublicRoute;
