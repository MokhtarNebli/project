

import { Link,  } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

const Home = () => {
 
  //useEffect(() => {
   // if (!isAuth) nav('/login');
  // }, [isAuth, nav]);

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Nebli's Pizza </h1>
        <p>THE BEST CHOICE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
