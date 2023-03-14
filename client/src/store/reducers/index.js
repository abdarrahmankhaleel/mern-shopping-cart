import { combineReducers } from "redux";
import countReducer from "./counterReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

export default combineReducers({
    counter:countReducer,
    user:userReducer,
    products:productReducer
})

