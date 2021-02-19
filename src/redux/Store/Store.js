import { compose, createStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducers/Reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const todoStore = createStore(todoReducer, composeEnhancer());

export default todoStore;
