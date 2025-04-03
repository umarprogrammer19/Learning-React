import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todosReducer",
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            state.todos = [...state.todos, {
                items: action.payload,
                id: nanoid(),
            }];
        }
    },

});

export const { addTodos } = todosSlice.actions;

export default todosSlice.reducer;