import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    iscompany: true,
    firstname: "",
    lastname: "",
    phonenumber: "",
    city: "",
    street: "",
    postalcode: ""
  });

  const {email, password, name, iscompany, firstname, lastname, phonenumber, city, street, postalcode} = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name, email, password, iscompany, firstname, lastname, phonenumber, city, street, postalcode }

      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.error(error.message);
    }
  }


  return (
    <div>
      <div className="container1">
        <h1 className="logo">
          <font color="DF482E">Er</font>
          <font color="273677">ken</font>
          </h1>          
      </div>
      <div className="Box">
        <div>
          <h1>Registreren</h1>
        </div>
        <form className="column" onSubmit={onSubmitForm}>
        <label>Werkgever
          <input type="radio" name="iscompany" value={iscompany === true}/>
        </label>
        <label>Werkzoekend
          <input type="radio" name="iscompany" value={iscompany === false}/>
        </label>
        <input
              type="text"
              name="email"
              value={email}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Email"
            />
        <input
              type="text"
              name="password"
              value={password}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Wachtwoord"
            />
        <input
              type="text"
              name="name"
              value={name}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Gebruikersnaam"
            />
        <input
              type="text"
              name="firstname"
              value={firstname}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Voornaam"
            />
        <input
              type="text"
              name="lastname"
              value={lastname}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Achternaam"
            />
        <input
              type="text"
              name="phonenumber"
              value={phonenumber}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Telefoonnummer"
            />
        <input
              type="text"
              name="city"
              value={city}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Stad"
            />
        <input
              type="text"
              name="street"
              value={street}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Straat"
            />
        <input
              type="text"
              name="postalcode"
              value={postalcode}
              className="Input"
              onChange={e => onChange(e)}
              placeholder="Postcode"
            />
        <input className="Button" type="submit"/>
        </form>
        <Link to="/login">login</Link>
      </div>
    </div>
  )
}

export default Register