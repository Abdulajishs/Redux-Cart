import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {show : false},
    reducers : {
        showCart(state,action){
            state.show = !state.show
        },

    }
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;