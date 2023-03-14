import { combineReducers } from "redux";
import countReducer from "./counterReducer";
import userReducer from "./userReducer";

export default combineReducers({
    counter:countReducer,
    user:userReducer,
})

