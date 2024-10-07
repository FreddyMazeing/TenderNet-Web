import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CompanyRegistration from "./components/CompanyRegistration.jsx";
import WebDevelopment from "./components/WebDevelopment";
import DigitalMarketing from "./components/DigitalMarketing";
import BusinessCompliance from "./components/BusinessCompliance";
import ContactForm from "./components/ContactForm.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/companyRegistration", element: <CompanyRegistration /> },
  { path: "/webdev", element: <WebDevelopment /> },
  { path: "/digitalMarketing", element: <DigitalMarketing /> },
  { path: "/businessCompliance", element: <BusinessCompliance /> },
  { path: "/contact", element: <ContactForm /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
