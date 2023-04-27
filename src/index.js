import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

import Store from "./Redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
