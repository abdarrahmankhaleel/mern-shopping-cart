import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import countReducer from "./counterReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

export default combineReducers({
    counter:countReducer,
    user:userReducer,
    products:productReducer,
    cart:cartReducer
})

