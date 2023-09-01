import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import cartReducer  from "./cartReducer";
import  userReducer  from "./userReducer";
import {purchaseItemsReducer} from "./purchaseItemReducer";
import profileReducer from "./profileReducer";
import  subtotalReducer  from "./subtotalReducer";
import { recentOrdersReducer } from "./recentOrders";
export default combineReducers({
  authReducer,
  cartReducer,
  userReducer,
  purchaseItemsReducer,
  subtotalReducer,
  profileReducer,
  recentOrdersReducer,
});
