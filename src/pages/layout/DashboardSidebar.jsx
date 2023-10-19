import React from 'react'
import { useNavigate } from 'react-router-dom';

const DashboardSidebar = () => {

  const navigate = useNavigate();
  const navigation = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Contact", to: "/contact" },
    { name: "Test", to: "/test" },
    { name: "Portfolios", to: "/portfolio" },
  ];

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("");
  };

  return (
    <>
      {navigation?.map((val, index) => {
            return (
              <div key={index}>
                <h4
                  onClick={() => navigate(val.to)}
                  style={{
                    textAlign: "center",
                    width: "10%",
                    paddingLeft: "20px",
                    cursor: "pointer",
                  }}
                >
                  {val.name}
                </h4>
              </div>
            );
          })}
          <h5
            style={{ paddingLeft: "20px", cursor: "pointer" }}
            onClick={clearLocalStorage}
          >
            logout
          </h5>
        
    </>
  )
}

export default DashboardSidebar