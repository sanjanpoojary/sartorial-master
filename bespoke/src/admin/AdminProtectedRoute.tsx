// src/AdminProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({
  children,
}) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin" replace />;
};

export default AdminProtectedRoute;
