import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../reducers/UsersSlice";
import { apiSlice } from "../api/apiSlice";
export const store=configureStore({
    reducer:{
        Users:UsersReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})
// store.dispatch(fetchUsers())