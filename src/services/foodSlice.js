import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../components/partials/data";
const foodSlice = createApi({
    reducerPath: "foodApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${url}/foodApi` }),
    endpoints: builder => ({
        getFoods: builder.query({
            query: () => ({
                url: "get",
                method: "GET",
            })
        })
    })


})
export const { useGetFoodsQuery } = foodSlice;
export default foodSlice;