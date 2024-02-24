import { createContext, useContext, useEffect, useReducer } from "react";
import reduce from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalItems = () => {
  let newCart = localStorage.getItem("watch");
  const watchProduct = JSON.parse(newCart);
  if (!Array.isArray(watchProduct)) return [];
  return watchProduct;
};

const initialState = {
  cart: getLocalItems(),
  total_price: "",
  total_items: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);

  const addToCart = (id, activeColor, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, activeColor, amount, product },
    });
  };

  // setDecrease_setIncrease
  const setDecrease = (id) => {
    dispatch({ type: "DECREASE_ITEMS", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "INCREASE_ITEMS", payload: id });
  };

  // removeItems
  const removeItems = (id) => {
    dispatch({ type: "REMOVE_ITEMS", payload: id });
  };

  // clearAll
  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL_DATA" });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE_CART_TOTAL_ITEMS" });
    localStorage.setItem("watch", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        setDecrease,
        setIncrease,
        removeItems,
        clearAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// CUSTOM HOOK
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartContext };
