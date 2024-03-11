import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-asuie1k5njhnzq4a.us.auth0.com"
    clientId="K4KCHDUZWEW2vlDlPQWSsIY0VcsCGYT6"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
  </Auth0Provider>
);
