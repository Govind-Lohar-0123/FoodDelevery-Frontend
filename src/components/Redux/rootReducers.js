import { combineReducers } from "@reduxjs/toolkit";
import { foodCartReducer, getAllFoodsReducer } from "./reducers/foodReducer";
import {  getMyOrdersReducer, getOrdersReducer } from "./reducers/orderReducer";



const rootReducers = combineReducers({
   getAllFoodsData: getAllFoodsReducer,
   getOrdersData: getOrdersReducer,
   getFoodCardData: foodCartReducer,
   getMyOrdersData: getMyOrdersReducer,

})


export default rootReducers;

