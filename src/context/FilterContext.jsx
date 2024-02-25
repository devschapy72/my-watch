import { createContext, useContext, useEffect, useReducer } from "react";
import reduce from "../reducer/FilterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "highest",
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const { product } = useProductContext();

  //   gridView
  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };
  // List View
  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: product });
  }, [product]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

// CUSTOM_HOOK
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider, useFilterContext };
