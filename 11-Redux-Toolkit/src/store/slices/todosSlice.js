import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todosReducer",
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            const trimmedText = action.payload.trim();
            if (trimmedText.length > 1) {
                if (state.todos.some((item) => item.items === trimmedText)) {
                    console.warn("This item is already added.");
                } else {
                    state.todos.push({
                        items: trimmedText,
                        id: nanoid(),
                    });
                }
            } else {
                console.warn("Please enter a valid item.");
            }
        },
        deleteTodos: (state, action) => {
            state.todos = state.todos.filter((_, index) => index !== action.payload);
        },
        editTodos: (state, action) => {
            const { index, newValue } = action.payload;
            if (newValue.trim().length > 1) {
                state.todos[index] = {
                    items: newValue.trim(),
                    id: nanoid()
                };
            } else {
                console.warn("Please enter a valid value.");
            }
        },
        deleteAll: (state) => {
            state.todos = [];
        }
    }
});

export const { addTodos, deleteTodos, deleteAll, editTodos } = todosSlice.actions;
export default todosSlice.reducer;
