import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import categorySlice from "./api/featchers/categorySlice/categorySlice";
import priceSlice from "./api/featchers/priceSlice/priceSlice";


export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        category:categorySlice,
        price:priceSlice
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware)
})

