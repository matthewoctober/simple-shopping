import { CART_STATUS, ADD_TO_CART, MODAL_STATUS } from "../actionTypes";

const toggleCartStatus = (state = "closed", action) => {
  switch (action.type) {
    case CART_STATUS: {
      return state === "closed" ? "open" : "closed";
    }
    default:
      return state;
  }
};

export const cartInventory = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { size, quantity, focusProduct } = action.payload.order;
      return [
        ...state,
        {
          focusProduct,
          size,
          quantity
        }
      ];
    }
    default:
      return state;
  }
};

const initialState = {
  isActive: false,
  message: ""
};

export const confirmMessage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { size, quantity, focusProduct } = action.payload.order;
      const { productName } = focusProduct;
      const productType =
        productName.includes("Simple") && quantity > 1
          ? "shirts"
          : productName.includes("Simple") && quantity === 1
          ? "shirt"
          : productName.includes("Pair") && quantity > 1
          ? "pairs of shoes"
          : "pair of shoes";
      const hasOrHave = quantity > 1 ? "have" : "has";

      return {
        isActive: true,
        message: `(${quantity}) ${size} "${productName}" ${productType} ${hasOrHave} successfully been added to your cart!`
      };
    }
    case MODAL_STATUS: {
      return initialState;
    }
    default:
      return state;
  }
};

export default toggleCartStatus;
