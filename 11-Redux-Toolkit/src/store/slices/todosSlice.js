import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todosReducer",
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            if (action.payload.length > 1) {
                state.todos = [...state.todos, {
                    items: action.payload.trim(),
                    id: nanoid(),
                }];
            } else {
                alert("Please Enter a valid Items")
            }
        },
        deleteTodos: (state, action) => {
            state.todos.splice(action.payload, 1);
            state.todos = [...state.todos]
        }
    },

});

export const { addTodos, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;