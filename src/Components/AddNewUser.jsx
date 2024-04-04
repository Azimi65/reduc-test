import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../reducers/UsersSlice";
import {  useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../api/apiSlice";
const AddNewUser=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [userName, setUserName] = useState("");
    const [userFamily, setUserFamily] = useState("");
    const [userGrade, setUserGrade] = useState(""); 
    const [addNewUser,{isLoading}]=useCreateUserMutation();
    const handleUserName = (e) => {
        setUserName(e.target.value);
      };
    
      const handleUserFamily = (e) => {
        setUserFamily(e.target.value);
      };
    
      const handleUserGrade = (e) => {
        setUserGrade(e.target.value);
      };
      const handleSubmitForm = async () => {
        // dispatch(
        //   createUser({  
     
             
        //         id:nanoid(),    
        //         name: userName,
        //         family: userFamily,
        //         grade: userGrade,
           
        //   })
        // );
        await addNewUser({
          id:nanoid(),
          name:userName,
          family:userFamily,
          grade:userGrade
        }).unwrap()
        navigate("/");
      };
    return(
        <form className="mt-10 flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <label htmlFor="name">نام</label>
        <input
          type="text"
          value={userName}
          className="border rouded p-2"
          onChange={handleUserName}
        />
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="name">نام خانوادگی</label>
        <input
          type="text"
          value={userFamily}
          className="border rouded p-2"
          onChange={handleUserFamily}
        />
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="name">درجه</label>
        <input
          type="text"
          value={userGrade}
          className="border rouded p-2"
          onChange={handleUserGrade}
        />
      </div>

      <button
        className="border-indigo-400 bg-gray-200 mt-2 p-2 rounded"
        type="button" // Change type to "button" to prevent form submission
        onClick={handleSubmitForm}
      >
        ایجاد
      </button>
    </form>
    )
}
export default AddNewUser;