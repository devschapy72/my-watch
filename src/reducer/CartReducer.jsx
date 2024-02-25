const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, activeColor, amount, product } = action.payload;

      // EXISTING_PRODUCT_**Start**
      let existingProduct = state.cart.find(
        (curItems) => curItems.id == id + activeColor
      );
      // Declare updateProduct here
      let updateProduct;
      if (existingProduct) {
        updateProduct = state.cart.map((items) => {
          if (items.id == id + activeColor) {
            let newAmount = items.amount + amount;
            if (newAmount >= items.max) {
              newAmount = items.max;
            }
            return {
              ...items,
              amount: newAmount,
            };
          } else {
            return items;
          }
        });
        return {
          ...state,
          cart: updateProduct,
        };
      } else {
        if (!product) {
          console.error("Product is undefined in action payload.");
          return state;
        }
      }

      // EXISTING_PRODUCT_**END**

      // ADD_CART_ITEMS
      let cartProduct;

      cartProduct = {
        id: id + activeColor,
        name: product.name,
        activeColor,
        amount,
        image: product.image,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    // setDecrease
    case "DECREASE_ITEMS":
      let updateDecrease = state.cart.map((curElm) => {
        if (curElm.id === action.payload) {
          let decreaseAmount = curElm.amount - 1;
          if (decreaseAmount <= 1) {
            decreaseAmount = 1;
          }
          return {
            ...curElm,
            amount: decreaseAmount,
          };
        } else {
          return curElm;
        }
      });
      return {
        ...state,
        cart: updateDecrease,
      };

    // setIncrease
    case "INCREASE_ITEMS":
      let updateIncrease = state.cart.map((curElm) => {
        if (curElm.id === action.payload) {
          let increaseAmount = curElm.amount + 1;
          if (increaseAmount >= curElm.max) {
            increaseAmount = curElm.max;
          }
          return {
            ...curElm,
            amount: increaseAmount,
          };
        } else {
          return curElm;
        }
      });
      return {
        ...state,
        cart: updateIncrease,
      };

    // REMOVE_ITEMS
    case "REMOVE_ITEMS":
      const updateItems = state.cart.filter(
        (curItems) => curItems.id !== action.payload
      );
      return {
        ...state,
        cart: updateItems,
      };

    // CLEAR_ALL_DATA
    case "CLEAR_ALL_DATA":
      return {
        ...state,
        cart: [],
      };

    // CART_TOTAL_PRICE_CART_TOTAL_ITEMS
    case "CART_TOTAL_PRICE_CART_TOTAL_ITEMS":
      let { total_price, total_items } = state.cart.reduce(
        (accum, curELm) => {
          let { price, amount } = curELm;

          accum.total_items += amount;
          accum.total_price += price * amount;
          return accum;
        },
        { total_items: 0, total_price: 0 }
      );
      return {
        ...state,
        total_items,
        total_price,
      };

    default:
      return state;
  }
};

export default CartReducer;
