import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9000"}),
    endpoints: (builder)=>({
        getUsers:builder.query({
            query:()=>"/users"
        }),
        getUser:builder.query({
            query:(userId)=>`users/${userId}`
        }),
        createUser:builder.mutation({
            query:(user)=>({
                url:"/users",
                method:"POST",
                body:user
            })
        }),
        editUser:builder.mutation({
            query:(user)=>({
                url:`edit/users/${user.id}`,
                method:"PUT",
                body:user
            })
        })
    }),
})
export const {useGetUsersQuery,useGetUserQuery,useCreateUserMutation,useEditUserMutation}=apiSlice;