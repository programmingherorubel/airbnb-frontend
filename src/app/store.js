import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import badroomSlice from "./api/featchers/badroomSlice/badroomSlice";
import categorySlice from "./api/featchers/categorySlice/categorySlice";
import priceSlice from "./api/featchers/priceSlice/priceSlice";
import singleBedSlice from "./api/featchers/singleBedSlice/singleBedSlice";


export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        category:categorySlice,
        price:priceSlice,
        Badroom:badroomSlice,
        beds:singleBedSlice
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware)
})

