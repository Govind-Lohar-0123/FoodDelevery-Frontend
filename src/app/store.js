import {configureStore} from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice.js";
import orderSlice from "../services/orderSlice.js";
import foodSlice from "../services/foodSlice.js";
import searchSlice from "../features/searchSlice.js";
import userSlice from "../features/userSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "./logger.js";



const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        [foodSlice.reducerPath]:foodSlice.reducer,
        [orderSlice.reducerPath]:orderSlice.reducer,
        searchFood:searchSlice,
        userInfo:userSlice,
        
    },
   
middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(apiSlice.middleware,foodSlice.middleware,orderSlice.middleware);
}
    // middleware:(getDefaultMiddleware)=>{return getDefaultMiddleware().concat(foodSlice.middleware);}
   

})
setupListeners(store.dispatch);
export default store;