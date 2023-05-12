import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectRoutes = () => {
  const { isAuth, userInfo } = useSelector((state) => state.user);
  return (
    <div>
      {isAuth && userInfo.role === "admin" ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default AdminProtectRoutes;
