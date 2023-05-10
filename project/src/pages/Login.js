import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction } from "../actions/userActions";
const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuth) nav('/home');
  });[isAuth, nav]
  const loginUser = (data) => {
    dispatch(loginAction(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginUser)}>
        <label>email</label>
        <input required type="email" {...register("email")} />
        <br />
        <label>password</label>
        <input required type="password" {...register("password")} />
        <br />
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
