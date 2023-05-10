import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { register as registerAction } from '../actions/userActions'
const Register = () => {
  const dispatch = useDispatch()
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
const {isAuth} = useSelector ((state) => state.user.userInfo)
  useEffect(()=>{
if (isAuth ) nav('/login')
  },[isAuth, nav])
    const registerNewUser = (data) => {
      dispatch(registerAction(data, nav));
    };
  return (
    <div>
      <form onSubmit={handleSubmit(registerNewUser)}>
        <label>name</label>
        <input required type="text" {...register("name")} />
        <br />
        <label>email</label>
        <input required type="email" {...register("email")} />
        <br />
        <label>password</label>
        <input required type="password" {...register("password")} />
        <br />
        <label>address</label>
        <input required type="text" {...register("address")} />
        <br />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
