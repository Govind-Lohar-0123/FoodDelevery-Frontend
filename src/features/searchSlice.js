import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"searchSlice",
    initialState:{search:""},
    reducers:{
        addSearch:(state,action)=>{state.search=action.payload},
    }
})
export const {addSearch}=searchSlice.actions;
export default searchSlice.reducer;