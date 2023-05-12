import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from '../actions/userActions'
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth,userInfo } = useSelector((state) => state.user)
 const logout = (e) => {
  e.preventDefault();
  dispatch(logoutAction())
 }
  return (
    <div className="navbar">
      <div className="leftSide">
        <div className="logobutton">
          <Link to="/home">
            <img src={Logo} />
            <button className="btn"></button>
          </Link>
        </div>
        <div className="hiddenLinks">
          {isAuth ? (
            <>
              <Link to="/"> Home </Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/Profil">{userInfo.name}</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/about"> About </Link>
              <Link to="login"> Login </Link>
              <Link to="register"> Register </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );

          }
export default Navbar;
