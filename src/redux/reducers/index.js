import {productReducer} from "./product";
import {userReducer} from "./userReducer";
import {combineReducers} from "redux";

export const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
})