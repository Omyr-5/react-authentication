import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import AboutIndex from "./pages/about/AboutIndex";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PrivateLayout from "./pages/layout/PrivateLayout";
import NotFound from "./pages/notFound/NotFound";
import UnAuthorized from "./pages/notFound/UnAuthorized";
import Test from "./pages/about/Test";
import ErrorBoundary from "./utils/ErrorBoundry";

export const AppContext = createContext();

function App() {
  const mainLayoutConfig = {
    isSidebar: true,
    isHeader: true,
    isFooter: true,
  };

  const dashboardLayoutConfig = {
    sideBar: true,
    header: true,
    footer: false,
    isMainSideBar: true,
  };

  const settingLayoutConfig = {
    sideBar: true,
    header: true,
    footer: false,
    isMainSideBar: false,
  };

  const routes = [
    {
      name: "dashboard",
      path: "/dashboard",
      component: DashboardIndex,
      roles: ["admin", "user", "manager"],
      layout: mainLayoutConfig,
    },
    {
      name: "contact",
      path: "/contact",
      component: AboutIndex,
      roles: ["admin", "user", "manager"],
      layout: mainLayoutConfig,
    },
    {
      name: "test",
      path: "/test",
      component: Test,
      roles: ["admin", "user", "manager", "super-admin"],
      layout: mainLayoutConfig,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: Test,
      roles: ["admin", "user", "manager", "super-admin"],
      layout: mainLayoutConfig,
    },
  ];
  const name = "";
  return (
    <>
      <AppContext.Provider value={{ name }}>
        <ErrorBoundary>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              {routes?.map((route, index) => {
                const { path, roles, layout } = route;
                const Component = route.component;
                return (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <PrivateLayout allowedRoles={roles} layout={layout}>
                        <Component />
                      </PrivateLayout>
                    }
                  />
                );
              })}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </AppContext.Provider>
    </>
  );
}

export default App;
