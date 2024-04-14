import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"userSlice",
    initialState:{user_email:""},
    reducers:{
        addUser:(state,action)=>{state.user_email=action.payload},
    }
})
export const {addUser}=userSlice.actions;
export default userSlice.reducer;