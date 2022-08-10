import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsApp} from "./routes/ProductsApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <ProductsApp />
    </BrowserRouter>
  // </React.StrictMode>
);
