import React from "react";
import "./login.css";
/*
import LockIcon from "@mui/icons-material/Lock";
*/

const Login = () => {
    return (
      <div className="container">
          <h1 class="logo">
          <font color="DF482E">Er</font>
          <font color="273677">ken</font>
          </h1>  
        <h1>
        <div className="textL">Welkom!</div>
        </h1>
        <h1>
        <div className="textL2">Wat is uw email?</div>
        </h1>

        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>

      </div>
    
    );
  };
  export default Login;
