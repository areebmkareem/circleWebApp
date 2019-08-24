import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authentication from "./Authentication";

const rootReducer = combineReducers({ authentication });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
