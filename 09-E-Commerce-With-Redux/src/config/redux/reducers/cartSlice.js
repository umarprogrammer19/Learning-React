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
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;