const ProductReducer = (state, action) => {
  switch (action.type) {
    case "LODING_PRODUCT":
      return {
        ...state,
        loading: true,
        error: false,
      };

    case "PRODUCTS_ITEMS":
      const updateProduct = action.payload.filter((items) => {
        return items.id;
      });
      return {
        ...state,
        loading: false,
        error: false,
        product: action.payload,
        featureProducts: updateProduct,
      };

    case "ERROR_PRODUCT":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
