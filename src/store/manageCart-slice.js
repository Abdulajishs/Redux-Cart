import { createSlice } from "@reduxjs/toolkit";

const manageCart = createSlice({
    name: "manageCart",
    initialState : {
        items: [],
        totalQuantity: 0,
        changed : false
    },
    reducers: {
        replaceCart (state,action) {
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            // console.log(newItem);
            const existingItem = state.items.find(item => item.id === newItem.id);
            // console.log(existingItem);
            state.totalQuantity++
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            // const existingIndex = state.items.findIndex(item => item.id === id);
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                // state.items[existingIndex].quantity = state.items[existingIndex].quantity - 1;
                // state.items[existingIndex].totalPrice = state.items[existingIndex].totalPrice - state.items[existingIndex].price;
                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    }
})




export const manageAction = manageCart.actions;

export default manageCart.reducer;