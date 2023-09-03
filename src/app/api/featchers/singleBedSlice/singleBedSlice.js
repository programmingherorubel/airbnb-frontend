import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    beds:''
}

const singleBedSlice = createSlice({
    name:"beds",
    initialState,
    reducers:{
        getBeds:(state,action)=>{
            state.beds = action.payload
        }
    }
})

export const {getBeds} = singleBedSlice.actions
export default singleBedSlice.reducer