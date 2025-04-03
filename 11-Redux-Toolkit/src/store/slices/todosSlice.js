import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
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

export const { addTodos } = todosSlice.actions;

export default todosSlice.reducer;