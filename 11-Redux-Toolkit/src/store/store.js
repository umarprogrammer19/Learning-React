import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./slices/todosSlice";

export const store = configureStore({
    reducer: {
        todosSlice,
    },
});