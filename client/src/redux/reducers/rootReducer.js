import { combineReducers } from "redux";
import toggleReducer, { toggleProfile } from "./toggleReducer";
import inventoryReducer from "./inventoryReducer";
import toggleCartStatus, {
  cartInventory,
  confirmMessage,
  calculateSubtotal
} from "./cartReducer";
import updateModal, { updateQuantity } from "./productCardReducer";

const rootReducer = combineReducers({
  productToggle: toggleReducer,
  inventory: inventoryReducer,
  cartStatus: toggleCartStatus,
  profileStatus: toggleProfile,
  modalStatus: updateModal,
  quantity: updateQuantity,
  cart: cartInventory,
  confirmAddToCart: confirmMessage,
  cartSubtotal: calculateSubtotal
});

export default rootReducer;
