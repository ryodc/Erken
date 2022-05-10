import React from "react";
import "./landingpage.css";
import Logo from "../Images/ErkenLogoScalable.png";

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
      <button class="begin">Begin Hier!</button>
    </div>
  );
};
export default Landingpage;
