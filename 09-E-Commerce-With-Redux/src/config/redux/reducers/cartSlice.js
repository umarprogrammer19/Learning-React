import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Carts",
    initialState: {
        cart: [],
    },
    reducers: {}
});