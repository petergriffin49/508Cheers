import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // needed for navbar toggles, modals, etc.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    	<App />
    </BrowserRouter>
  </StrictMode>
);
