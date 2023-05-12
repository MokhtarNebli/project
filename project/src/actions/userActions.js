import axios from 'axios'
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import { useNavigate } from 'react-router-dom';

export const register = (userData, nav) => async (dispatch) => { 
try {
   const res = await axios.post("/api/person/register", userData);
   const nav = useNavigate();
   dispatch({ type: REGISTER_SUCCESS, payload: res.data });
   nav('/login')
} catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
}

}
export const login = (userData, nav) => async (dispatch) => {
  try {
    const res = await axios.post("/api/person/login", userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
   if (res.data.existUser.role === 'user') nav('/profile');
else if (res.data.existUser.role === 'admin') nav("/AdminDashbord");
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};