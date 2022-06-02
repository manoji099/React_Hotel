import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import HotelReducer from "./LoginProject/HotelReducer";
import TextReducer from "./TextReducer";
import UsersReducer from "./UsersReducer";

//  reducer in your app, can be combined in to one and mention all them here
export const RootReducer = combineReducers({ TextReducer, UsersReducer, HotelReducer });

// schema of our root reducer, it is used for reading data from reducer
export type AppState = ReturnType<typeof RootReducer>;

// connection between react and redux
export const ConfigureStore = () => {
    return createStore(RootReducer, {}, devToolsEnhancer({}));
}

