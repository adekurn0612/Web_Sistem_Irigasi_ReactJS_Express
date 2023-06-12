import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { reqLogin } from "../../redux/action/actionReducer";
import { handleLogin } from "../../redux/saga/loginSaga";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleMengLogin = () => {
    const formData = getValues(); // Mengambil semua nilai field yang didaftarkan

    console.log(formData);
    dispatch(reqLogin(formData));
  };
  const tokenku = localStorage.getItem('token');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (tokenku) {
      setShouldRedirect(true);
    }
  }, [tokenku]);

  if (shouldRedirect) {
    return <Navigate push to="/dasboard/" />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleMengLogin)}>
    <div className="mb-4"
     >
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Username
      </label>
      <input {...register('username')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Password
      </label>
      <input {...register('password')} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
    </div>
    <div className=" flex items-center justify-between">
      <button className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Login
      </button>
    </div>
  </form>
</div>
);
};

export default Login;
