import { createSlice } from "@reduxjs/toolkit";
import { cartAction } from "./cart-slice";
const manageCart = createSlice({
    name: "manageCart",
    initialState : {
        items: [],
        totalQuantity: 0,
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

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(cartAction.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!"
        }))
        const sentRequest = async () => {
            try {
                const response = await fetch("https://react-http-4b164-default-rtdb.firebaseio.com/cart.json", {
                    method: "PUT",
                    body: JSON.stringify(cart),
                })
                if (response.ok) {
                    dispatch(cartAction.showNotification({
                        status: "success",
                        title: "Success!",
                        message: "Sending cart  data successfully!"
                    }))
                } else {
                    throw new Error("Sending cart  data failed!")
                }
            } catch (error) {
                dispatch(cartAction.showNotification({
                    status: "error",
                    title: "Error",
                    message: "Sending cart  data failed!"
                }))
            }
        }
        await sentRequest();
    }
}

export const retrieveCartData = () => {
    return async (dispatch) => {
        dispatch(cartAction.showNotification({
            status: "pending",
            title: "Retrieving...",
            message: "Retrieving cart data!"
        }))
        const sentRequest = async () => {
            try {
                const response = await fetch("https://react-http-4b164-default-rtdb.firebaseio.com/cart.json")
                // console.log(response);
                const data = await response.json();
                if (response.ok) {
                    // console.log(data);
                    dispatch(manageAction.replaceCart(data))
                    dispatch(cartAction.showNotification({
                        status: "success",
                        title: "Success!",
                        message: "Retrieving cart  data successfully!"
                    }))
                }else{
                    throw new Error("Retrieving cart  data failed!")
                }
            } 
            catch (error) {
                dispatch(cartAction.showNotification({
                    status: "error",
                    title: "Error",
                    message: "Retrieving cart  data failed!"
                }))
            }
        }
        await sentRequest();
    }
}

export const manageAction = manageCart.actions;

export default manageCart.reducer;