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

    default:
      return state;
  }
};

export default FilterReducer;
