import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <Link to="/login">Log in</Link>
    </>
  );
};

export default LandingPage;
