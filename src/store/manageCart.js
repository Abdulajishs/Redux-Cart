import { createSlice } from "@reduxjs/toolkit";

const manageCart = createSlice({
    name : "manageCart",
    initialState : {quantity : 1 , price : 6 },
    reducers : {
        addItemToCart (state,action) {
            state.quantity = state.quantity + 1
        },
        removeItemToCart (state,action) {
            state.quantity = state.quantity - 1
        },
    }
})

export const manageAction = manageCart.actions;

export default manageCart.reducer;