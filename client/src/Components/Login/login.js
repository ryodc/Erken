import React, { useState } from "react";
import "./login.css";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
      <div>
        <div className="container">
        <h1 class="logo">
          <font color="DF482E">Er</font>
          <font color="273677">ken</font>
          </h1>          
        </div>
        <div className="Box">
          <div className="Header">
          <h1>Inloggen</h1>
          </div>
          <form className="column" onSubmit={onSubmitForm}>
            <input
              type="text"
              name="email"
              value={email}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => onChange(e)}     
              className="Input"    
              placeholder="Password"   
            />
            <button classname="Button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    
    );
  };
  export default Login;
