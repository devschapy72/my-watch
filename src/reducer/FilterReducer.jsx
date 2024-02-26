const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    // gridView
    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    // SET_LIST_VIEW
    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };

    // SORTING_VALUE_START
    case "SORTING_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filterProducts, sortingValue } = state;
      let tempSortDataProduct = [...filterProducts];

      const sortingProducts = (a, b) => {
        if (sortingValue === "lowest") {
          return a.price - b.price;
        }

        if (sortingValue === "highest") {
          return b.price - a.price;
        }

        if (sortingValue === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sortingValue === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortDataProduct.sort(sortingProducts);

      return {
        ...state,
        filterProducts: newSortData,
      };

    // SORTING_VALUE_END

    // "UPDATE_FILTER_VALUE_START"
    case "UPDATE_FILTER_VALUE":
      let { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // "USEEFFECT_FILTER_PRODUCTS"

    case "FILTER_PRODUCTS":
      let { allProducts } = state;
      let tempFilterProduct = [...allProducts];

      const { text, company } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((items) => {
          return items.name.toLowerCase().includes(text);
        });
      }

      if (company !== "all company") {
        tempFilterProduct = tempFilterProduct.filter(
          (items) => items.company === company
        );
      }
      return {
        ...state,
        filterProducts: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default FilterReducer;
