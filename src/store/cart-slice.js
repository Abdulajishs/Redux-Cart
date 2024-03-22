import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {show : false , notification : null},
    reducers : {
        showCart(state,action){
            state.show = !state.show
        },
        showNotification(state,action){
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.message
            }
        }

    }
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;