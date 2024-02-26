import { createContext, useContext, useEffect, useReducer } from "react";
import reduce from "../reducer/FilterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "",
  filters: {
    text: "",
    company: "all company",
  },
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

  // SORTING_FUNCTION
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "SORTING_VALUE", payload: userValue });
  };

  // updateFilterValue
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [product, state.sortingValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: product });
  }, [product]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// CUSTOM_HOOK
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider, useFilterContext };
