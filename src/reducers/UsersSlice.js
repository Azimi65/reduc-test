import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
const usersAdaptor = createEntityAdapter();
const initialState = usersAdaptor.getInitialState({
      status:"idle"
});
// export const fetchUsers=createAsyncThunk("users/fetchUsers",async()=>{
//     try{
//         const response= await axios.get("http://localhost:9000/users")
//         console.log(response)
//         return response.data
//     }catch(err){
//         console.log(err.message)
//     }
// })

// export const updateUser = createAsyncThunk("users/updateUser",async ({ userId, newUser }) => {
//       try {
//         const response = await axios.put(
//           `http://localhost:9000/users/${userId}`,
//           newUser
//         );
//         return response.data;
//       } catch (err) {
//         console.log(err.message);
//       }
//     }
//   );
  export const createUser = createAsyncThunk("users/createUser" , async (newUser)=>{
        try{
            const response = await axios.post(`http://localhost:9000/users`, newUser)
            return response.data

        }catch(err){
            console.log(err.message)
        }
  })
  export const deleteUser = createAsyncThunk("users/deleteUser", async(userId)=>{
    try{
      const response = await axios.delete(`http://localhost:9000/users/${userId}`)
      return userId
    }catch(err){
        console.log(err.message)
    }
  })
const UsersSlice=createSlice({
    name:"Users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // builder.addCase(fetchUsers.fulfilled,usersAdaptor.upsertMany)
        // builder.addCase(updateUser.fulfilled,usersAdaptor.updateOne)
        builder.addCase(createUser.fulfilled,usersAdaptor.setOne)
        .addCase(deleteUser.fulfilled,usersAdaptor.removeOne)
}
});
export const {selectAll:selectAllUsers,selectById}=usersAdaptor.getSelectors(state=>state.Users)
export default UsersSlice.reducer; 