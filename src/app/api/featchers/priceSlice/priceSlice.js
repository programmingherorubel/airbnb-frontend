import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        price:100
    }

const priceSlice = createSlice({
    name:'price',
    initialState,
    reducers:{
        getPrice:(state,action)=>{
            state.price = action.payload
        }
    }
})

export const {getPrice} = priceSlice.actions

export default priceSlice.reducer