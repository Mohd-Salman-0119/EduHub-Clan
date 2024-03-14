import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element, ...rest }) => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Route {...rest} element={token ? element : <Navigate to="/login" />} />
  );
};

export default PrivateRoute;
