import { createSlice } from "@reduxjs/toolkit";

const manageCart = createSlice({
    name: "manageCart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingIndex = state.items.findIndex(item => item.id === newItem.id);
            console.log(existingIndex);
            if (existingIndex === -1) {
                state.items.push({
                    id: newItem.id,
                    name : newItem.title,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                });
                state.totalQuantity++
            } else {
                state.items[existingIndex].quantity = state.items[existingIndex].quantity + 1 ;
                state.items[existingIndex].totalPrice = state.items[existingIndex].totalPrice + newItem.price;
                state.totalQuantity++
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingIndex = state.items.findIndex(item => item.id === id);
            state.items[existingIndex].quantity = state.items[existingIndex].quantity - 1 ;
            state.items[existingIndex].totalPrice = state.items[existingIndex].totalPrice - state.items[existingIndex].price;
            state.totalQuantity--;
        },
    }
})
export const manageAction = manageCart.actions;

export default manageCart.reducer;