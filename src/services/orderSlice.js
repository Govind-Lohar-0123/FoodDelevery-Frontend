import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderSlice = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/orderApi" }),
    endpoints: builder => ({

        getOrder: builder.mutation({
            query: (email) => ({
                url: "/getorder",
                method: "post",
                body:{email}
            })
        }),
        addOrder: builder.mutation({
            query: (order_data) => ({
                url: "/addorder",
                method: "post",
                body:{...order_data}
            })
        }),
       

    })


})
export const { useGetOrderMutation,useAddOrderMutation } = orderSlice;
export default orderSlice;