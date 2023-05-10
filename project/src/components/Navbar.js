import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from '../actions/userActions'
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user)
 const logout = (e) => {
  e.preventDefault();
  dispatch(logoutAction())
 }
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        <div className="hiddenLinks">
          {isAuth ? (
            <>
              <Link to="/home"> Home </Link>
              <Link to="/Profil">Profile</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
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
