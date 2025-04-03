import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlice";

export const store = configureStore({
    reducer: {
        todosReducer,
    },
});