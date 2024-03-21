import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice";
import manageReducer from "./manageCart-slice";


const store = configureStore({
    reducer : {cart : cartReducer , manage : manageReducer }
})

export default store;