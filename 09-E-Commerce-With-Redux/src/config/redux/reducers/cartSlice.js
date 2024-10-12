import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Carts",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
                state.cart.push({
                    product: action.payload.products,
                    id: nanoid(),
                });
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload.index, 1);
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;