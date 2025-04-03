import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todosReducer",
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            state.todos = [...state.todos, action.payload];
        }
    },

});

export const { addTodos } = todosSlice.actions;

export default todosSlice.reducer;