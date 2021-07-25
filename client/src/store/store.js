import {combineReducers} from "redux";
import { createStore } from "redux";
import reducer from "./reducer";

const red=combineReducers({
reducer
});

const store=createStore(
    red,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;