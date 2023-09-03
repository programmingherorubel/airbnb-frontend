import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    badroom:''
}

const badroomSlice = createSlice({
    name:'badroom',
    initialState,
    reducers:{
        getBadRoom:(state,action)=>{
            state.badroom = action.payload
        }
    }
})



export  const{getBadRoom} = badroomSlice.actions

export default badroomSlice.reducer