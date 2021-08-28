import React, { useEffect } from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router";

export interface IPrivateRouteProps extends RouteProps {
  isLoggedIn: boolean;
  logInPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  isLoggedIn,
  logInPath,
  redirectPath,
  setRedirectPath,
  ...routeProps
}) => {
  const currentLocation = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      setRedirectPath(currentLocation.pathname);
    }
  }, [isLoggedIn, setRedirectPath, currentLocation]);

  if (isLoggedIn && redirectPath === currentLocation.pathname) {
    return <Route {...routeProps} />;
  } else {
    return (
      <Redirect to={{ pathname: isLoggedIn ? redirectPath : logInPath }} />
    );
  }
};

export default PrivateRoute;
