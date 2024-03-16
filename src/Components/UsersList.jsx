import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"; 
import { fetchUsers, selectAllUsers } from "../reducers/UsersSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); 

 
  const allUsers = useSelector(selectAllUsers);

  return (
    <div className="w-full flex flex-col mt-10">
      <Link to="/add">
        <button className="bg-blue-200 border border-blue-400 rounded p-2">
          + ایجاد کاربر جدید
        </button>
      </Link>
      <table className="table-fixed  w-full border border-1 rounded h-full p-10 mt-10">
        <thead>
          <tr>
            <td>نام</td>
            <td>نام خانوادگی</td>
            <td>درجه</td>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.family}</td>
              <td>{user.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
