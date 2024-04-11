import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath:"api",
    tagTypes:["BLOG"],
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9000"}),
    endpoints: (builder)=>({
        getUsers:builder.query({
            query:()=>"/users",
            providesTags:["BLOG"]
        }),
        getUser:builder.query({
            query:(userId)=>`users/${userId}`
        }),
        createUser:builder.mutation({
            query:(user)=>({
                url:"/users",
                method:"POST",
                body:user
            }),
            invalidatesTags:["BLOG"]
        }),
        editUser:builder.mutation({
            query:(user)=>({
                url:`edit/users/${user.id}`,
                method:"PUT",
                body:user
            }),
            invalidatesTags:(result,error,arg)=>[{type:'BLOG',id:arg.id}]
        })
    }),
})
export const {useGetUsersQuery,useGetUserQuery,useCreateUserMutation,useEditUserMutation}=apiSlice;