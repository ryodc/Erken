import React from "react";
import "./landingpage.css";
import Logo from "../Images/erken-no-text.png";

const Landingpage = () => {
  return (
    <div class="container">
      <img src={Logo} alt="Logo"></img>
      <h1>
        <font color="DF482E">Er</font>
        <font color="273677">ken</font>
      </h1>
      <h4>Zoekt u naar een baan?</h4>
      <h1>
        <p>Vind je</p>
        <p>droom baan</p>
        <p>bij ons!</p>
      </h1>
      <button class="login">Login</button>
      <button class="begin">Begin Hier!</button>
    </div>
  );
};
export default Landingpage;
