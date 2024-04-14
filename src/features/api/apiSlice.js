import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
    endpoints: builder => {
        return {
            userRegister: builder.mutation({
                query: (newUser) => {

                    return {
                        url: "signup",
                        method: "post",
                        body: newUser
                    }
                }
            }),
            userLogin: builder.mutation({
                query: (actualData) => {
                    const {email,password,token}=actualData;
                    console.log(token);
                    return {
                        url: "login",
                        method: "post",
                        body:{email,password},
                        headers: { "authorization": "Bearer " + token }

                    }
                }
            }),
           getUser: builder.query({
                query: (token) => {
                    return {
                        url: "getuser",
                        method: "get",
                        headers: { "authorization": "Bearer " + token }

                    }
                }
            })
        }
    }


})

export const { useUserRegisterMutation, useUserLoginMutation ,useGetUserQuery} = apiSlice;
export default apiSlice;