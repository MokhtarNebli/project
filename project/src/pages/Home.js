import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from "../assets/pizza.jpeg";
import '../styles/Home.css'

function home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Nebli's Pizza </h1>
        <p>THE BEST CHOICE</p>
        <Link to="menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default home