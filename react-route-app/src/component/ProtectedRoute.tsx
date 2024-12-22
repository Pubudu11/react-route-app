import React from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
  isAuthenticated: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/"); // Redirect to login page
  };

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <button onClick={handleNavigation}>Please Log In</button>
  );
};

export default ProtectedRoute;
