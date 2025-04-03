import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todosReducer",
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            if (action.payload.length > 1) {
                if (state.todos.find((item) => action.payload.trim() == item.items)) {
                    alert("This Item Already Added")
                } else {
                    state.todos = [...state.todos, {
                        items: action.payload.trim(),
                        id: nanoid(),
                    }];
                }
            } else {
                alert("Please Enter a valid Items")
            }
        },
        deleteTodos: (state, action) => {
            state.todos.splice(action.payload, 1);
            state.todos = [...state.todos]
        },
        editTodos: (state, action) => {
            if (action.payload.length > 1) {
                state.todos.splice(action.payload.index, 1, action.payload.newValue);
            } else {
                alert("Please Enter a valid Items")
            }
        },
        deleteAll: (state, action) => {
            state.todos = []
        }
    },

});

export const { addTodos, deleteTodos, deleteAll } = todosSlice.actions;

export default todosSlice.reducer;