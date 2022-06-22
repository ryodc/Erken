import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div className="container1">
        <h1 className="logo">
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
            onChange={(e) => onChange(e)}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            className="Input"
            placeholder="Password"
          />
          {/* <button classname="Button">Submit</button> */}
          <input className="Submit" type="submit" value="Log in" />
        </form>
        <button className="reg-btn">
          <Link className="reg" to="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Login;
