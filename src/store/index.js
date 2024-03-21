import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice";
import manageReducer from "./manageCart";


const store = configureStore({
    reducer : {cart : cartReducer , manage : manageReducer }
})

export default store;