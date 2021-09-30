import React, { useEffect } from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";

export interface IPrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  redirectPath,
  setRedirectPath,
  ...routeProps
}) => {
  const currentLocation = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirectPath(currentLocation.pathname);
    }
  }, [isAuthenticated, setRedirectPath, currentLocation]);

  if (isAuthenticated && redirectPath === currentLocation.pathname) {
    return <Route {...routeProps} />;
  }

  return (
    <Redirect
      to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }}
    />
  );
};

export default PrivateRoute;
