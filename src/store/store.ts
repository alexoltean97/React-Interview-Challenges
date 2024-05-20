import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./toDoSlice.js";

const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});

export default store; 