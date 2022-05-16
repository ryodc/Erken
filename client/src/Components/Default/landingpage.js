import React from "react";
import "./landingpage.css";
import Logo from "../Images/ErkenLogoScalable.png";
import Image1 from "../Images/1.png";
import Image2 from "../Images/2.png";
import Image3 from "../Images/3.png";

const Landingpage = () => {
  return (
    <div class="container">
      <img class="logo" src={Logo} alt="Logo"></img>
      {/* <h1>
        <font color="DF482E">Er</font>
        <font color="273677">ken</font>
      </h1> */}
      <button class="login">Login</button>
      <div class="first-header">Zoekt u naar een baan?</div>
      <div class="text">
        <p>Vind je</p>
        <p>droom baan</p>
        <p>bij ons!</p>
      </div>
      <div class="images">
        <img class="image1" src={Image1} alt="image1"></img>
        <img class="image2" src={Image2} alt="image2"></img>
        <img class="image3" src={Image3} alt="image3"></img>
      </div>
      <button class="begin">Begin Hier!</button>
    </div>
  );
};
export default Landingpage;
