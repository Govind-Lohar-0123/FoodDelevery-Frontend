import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {url} from "../components/partials/data"
const orderSlice = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${url}/orderApi` }),
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