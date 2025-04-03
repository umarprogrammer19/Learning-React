import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

export const userSlice = createSlice({
    name: "Todos",
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            state.todos = [...todos, action.payload];
        }
    },

});

export const { } = userSlice.actions;

export default userSlice.reducer;