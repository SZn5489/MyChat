import { combineReducers } from "redux";
import SendReducer from "./SendReducer";

const rootReducer = combineReducers({
    Send:SendReducer
});

export default rootReducer;