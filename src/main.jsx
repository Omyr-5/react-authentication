import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./interceptors.js";
import { SnackbarProvider } from "notistack";
import ErrorBoundary from "./utils/ErrorBoundry.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarProvider>
    <ErrorBoundary fallback="there is some errros">
      <App />
    </ErrorBoundary>
  </SnackbarProvider>
);
