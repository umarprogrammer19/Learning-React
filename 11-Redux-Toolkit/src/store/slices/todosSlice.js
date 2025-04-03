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
        },
        deleteTodos: (state, action) => {
            state.todos.splice(action.payload, 1);
            state.todos = [...state.todos]
        }
    },

});

export const { addTodos, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;