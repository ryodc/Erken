import React from "react";
import "./landingpage.css";
//import Logo from "../Images/ErkenLogoScalable.png";
import Image1 from "../Images/1.png";
import Image2 from "../Images/2.png";
import Image3 from "../Images/3.png";
import Navbar from "../Navbar/navbar.js";

import { Link, Redirect } from "react-router-dom";

const Landingpage = () => {
  function navbar() {
    return <Navbar />;
  }

  return (
    <div className="container">
      {/* <img className="logo" src={Logo} alt="Logo"></img> */}
      <h1 class="logo">
        <font color="DF482E">Er</font>
        <font color="273677">ken</font>
      </h1>
      {/* <button className="login">Login</button> */}
      <Link className="login" to="/login">Login</Link>
      <div className="first-header">Zoekt u naar een baan?</div>
      <div className="text">
        <p>Vind je</p>
        <p>droom baan</p>
        <p>bij ons!</p>
      </div>
      <div className="images">
        <img className="image1" src={Image1} alt="image1"></img>
        <img className="image2" src={Image2} alt="image2"></img>
        <img className="image3" src={Image3} alt="image3"></img>
      </div>
      <form onsubmit={navbar}>
        {/* <button className="begin" onClick={navbar}>
          Begin Hier!
        </button> */}
        <Link className="begin" to="/register">Begin Hier!</Link>
      </form>
    </div>
  );
};
export default Landingpage;
