import { configureStore } from "@reduxjs/toolkit";
import UsersReducer, { fetchUsers } from "../reducers/UsersSlice";
export const store=configureStore({
    reducer:{
        Users:UsersReducer,
    }
})
// store.dispatch(fetchUsers())