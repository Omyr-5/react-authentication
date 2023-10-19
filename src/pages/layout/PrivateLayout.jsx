import { Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const PrivateLayout = ({ path, allowedRoles, children, layout }) => {
  const authToken = localStorage.getItem("jwtToken");
  const userRole = localStorage.getItem("role");

  const isAuthorized =
    userRole && allowedRoles.some((val) => val.includes(userRole));

  const navigate = useNavigate();

  if (!authToken) {
    return <Navigate to="/" />;
  }

  return (
    <Layout isAuthorized={isAuthorized} layout={layout}>
      {children}
    </Layout>
  );
};

export default PrivateLayout;
