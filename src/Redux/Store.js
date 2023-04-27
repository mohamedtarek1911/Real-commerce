import { createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
// import rootreducers from "./reducers/rootreducers";

const middleware = [thunk];
const initalState = {};
const Store = createStore(
  rootReducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
