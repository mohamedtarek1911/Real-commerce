import React from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute({ auth, children }) {
  if (auth === false) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
}
