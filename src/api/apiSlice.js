import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath:"api",
    tagTypes:["BLOG"],
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9000"}),
    endpoints: (builder)=>({
        getUsers:builder.query({
            query:()=>"/users",
            providesTags:(result=[],error,arg)=>['BLOG',...result.map(({id})=>({type:'BLOG',id}))]
        }),
        getUser:builder.query({
            query:(userId)=>`users/${userId}`,
            providesTags:(result,error,arg)=>[{type:'BLOG',id:arg}]
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
                url:`users/${user.id}`,
                method:"PUT",
                body:user
            }),
            invalidatesTags:(result,error,arg)=>[{type:'BLOG',id:arg.id}]
        }),
        deleteUser:builder.mutation({
            query:(user)=>({
               url:`users/${user.id}`,
               method:'DELETE', 
               body:user
            }),
            invalidatesTags:(result,error,arg)=>[{type:'BLOG',id:arg.id}]
        })
    }),
})
export const {useGetUsersQuery,useGetUserQuery,useCreateUserMutation,useEditUserMutation,useDeleteUserMutation}=apiSlice;