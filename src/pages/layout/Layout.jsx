import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const Layout = ({ children, isAuthorized, layout }) => {
  const [isLoading, setIsLoading] = useState(true);

  const authToken = localStorage.getItem("jwtToken");
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (token) {
          await axios.get("/auth/current");
        }
      } catch (error) {
        console.log(error, "errorr");
      }
    };

    if (authToken) {
      getUserData();
    }
  }, []);

  return (
    <>
      <div style={{ display: "flex", width: "100%", gap: "10px" }}>
        <div
          style={{
            width: "15%",
            background: "#001334",
            height: "99vh",
            color: "white",
          }}
        >
          <DashboardSidebar />
        </div>
        
        {isAuthorized ? (
          <div
            style={{
              width: "100%",
              background: "",
            }}
          >
            {children}
          </div>
        ) : (
          <div>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "85%",
              }}
            >
              Unauthorized access to user
            </h2>
          </div>
        )}
      </div>
    </>
  );
};
export default Layout;
