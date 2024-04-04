import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// import { selectById, updateUser } from "../reducers/UsersSlice"; // Changed import here
import { useEffect, useState } from "react";
import { useEditUserMutation, useGetUserQuery } from "../api/apiSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  // const selectedUser = useSelector((state) => selectById(state, userId));
  const {data:user}=useGetUserQuery(userId)
  
  const [userName, setUserName] = useState("");
  const [userFamily, setUserFamily] = useState("");
  const [userGrade, setUserGrade] = useState("");
  const[updateUser,{isLoading}]=useEditUserMutation(user);
  useEffect(() => {
    if (user) {
      setUserName(user.name);
      setUserFamily(user.family);
      setUserGrade(user.grade);
    }
  }, []);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserFamily = (e) => {
    setUserFamily(e.target.value);
  };

  const handleUserGrade = (e) => {
    setUserGrade(e.target.value);
  };

  const handleEditForm = async() => {
    // dispatch(
    //   updateUser({   // Changed parameters here
    //     userId: userId, // Pass userId as part of an object
    //     newUser: {      // Pass newUser as part of an object
    //       name: userName,
    //       family: userFamily,
    //       grade: userGrade,
    //     },
    //   })
    // );
     await updateUser({
      id: user.id, 
      name: userName,
      family: userFamily,
      grade: userGrade    
    });
    navigate("/");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
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
        onClick={handleEditForm}
      >
        ویرایش
      </button>
    </form>
  );
};

export default EditUser;
