import { cartAction } from "./cart-slice";
import { manageAction } from "./manageCart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const sentRequest = async () => {
            const response = await fetch("https://react-http-4b164-default-rtdb.firebaseio.com/cart.json")
            // console.log(response);
            const data = await response.json();
            if (!response.ok) {
                // console.log(data);
                throw new Error("Retrieving cart  data failed!")
            }
            return data
        }
        try {
            const data = await sentRequest();
            dispatch(manageAction.replaceCart({
                items : data.items || [],
                totalQuantity : data.totalQuantity
            }))
        }
        catch (error) {
            dispatch(cartAction.showNotification({
                status: "error",
                title: "Error",
                message: "Retrieving cart  data failed!"
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(cartAction.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!"
        }))
        const sentRequest = async () => {
            const response = await fetch(
                "https://react-http-4b164-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify({
                    items : cart.items , totalQuantity : cart.totalQuantity
                }),
            })
            if (!response.ok) {
                throw new Error("Sending cart  data failed!")
            }
        }
        try {
            await sentRequest();

            dispatch(cartAction.showNotification({
                status: "success",
                title: "Success!",
                message: "Sending cart  data successfully!"
            }))
        }
        catch (error) {
            dispatch(cartAction.showNotification({
                status: "error",
                title: "Error",
                message: "Sending cart  data failed!"
            }))
        }
    }
}
