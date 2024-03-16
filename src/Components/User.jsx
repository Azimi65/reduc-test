import { useParams ,Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectById } from "../reducers/UsersSlice";
const User = () => {
  const { userId } = useParams();
  const currentUser = useSelector((state) => selectById(state, userId));
  if(!currentUser){
    return(<div>کاربر موردنظر وجود ندارد</div>)
  }
  return (
    <div className="w-full border rounded border-2 border-indigo-400 p-5 text-start mt-10">
      <h1>مشخصات کاربر:</h1>
      <div className="flex gap-2"><span>نام:</span><span>{currentUser.name}</span></div>
      <div className="flex gap-2"><span>نام خانوادگی:</span><span>{currentUser.family}</span></div>
      <div className="flex gap-2"><span>گرید:</span><span>{currentUser.grade}</span></div>
      <div className="flex gap-3 mt-5">
        <Link to={`/edit/${userId}`}><button className="bg-indigo-200 border border-indigo-400 rounded p-2">ویرایش کاربر</button></Link>
        <button className="bg-green-200 border border-green-400 rounded p-2">حذف کاربر</button>
      </div>
      
    </div>
  );
};
export default User;
