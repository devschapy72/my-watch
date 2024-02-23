import { createContext, useContext, useEffect, useReducer } from "react";
import WatchApi from "../watch_api/WatchApi";
import reducer from "../reducer/ProductReducer";

const ProductContext = createContext();

const initailState = {
  loading: "",
  error: "",
  featureProducts: [],
  product: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);

  const getProduct = (api) => {
    dispatch({ type: "LODING_PRODUCT" });
    try {
      const products = api;
      dispatch({ type: "PRODUCTS_ITEMS", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR_PRODUCT" });
    }
  };

  useEffect(() => {
    getProduct(WatchApi);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

// CUSTOM_HOOK
const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProductContext };
