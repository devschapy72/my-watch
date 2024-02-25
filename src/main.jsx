import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <FilterProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </FilterProvider>
  </ProductProvider>
);
