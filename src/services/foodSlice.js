import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const foodSlice=createApi({
    reducerPath:"foodApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://fooddelevery-backend.onrender.com/foodApi"}),
    endpoints:builder=>({
        getFoods:builder.query({
            query:()=>({
                url:"/get",
                method:"GET",
            })
        })
    })


})
export const {useGetFoodsQuery}=foodSlice;
export default foodSlice;