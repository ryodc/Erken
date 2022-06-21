import React, { useState, useEffect } from "react";
import "./profileinfo.css";

import EditIcon from '@mui/icons-material/Edit';
import EditProfile from "./editprofile.js";

export default function ProfileInfo() {
  const [Status, setStatus] = useState(0);

  const [naam, setNaam] = useState(localStorage.getItem("Naam"));
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [telefoonnummer, setTelefoonnummer] = useState(localStorage.getItem("Telefoonnummer"));
  const [straat, setStraat] = useState(localStorage.getItem("Straat"));
  const [huisnummer, setHuisnummer] = useState(localStorage.getItem("Huisnummer"));
  const [woonplaats, setWoonplaats] = useState(localStorage.getItem("Woonplaats"));
  const [postcode, setPostcode] = useState(localStorage.getItem("Postcode"));

  const loadValues = async () => {
    setNaam(localStorage.getItem("Naam"));
    setEmail(localStorage.getItem("Email"));
    setTelefoonnummer(localStorage.getItem("Telefoonnummer"));
    setStraat(localStorage.getItem("Straat"));
    setHuisnummer(localStorage.getItem("Huisnummer"));
    setWoonplaats(localStorage.getItem("Woonplaats"));
    setPostcode(localStorage.getItem("Postcode"));
  }

  const setValues = async () => {
    localStorage.setItem("Naam", "Naam");
    localStorage.setItem("Email", "Email");
    localStorage.setItem("Telefoonnummer", "Telefoonnummer");
    localStorage.setItem("Straat", "Straat");
    localStorage.setItem("Huisnummer", "Huisnummer");
    localStorage.setItem("Woonplaats", "Woonplaats");
    localStorage.setItem("Postcode", "Postcode");
  }

  useEffect(() => {
    if(localStorage.getItem('Username') === null) {
      setValues()
    }
    loadValues()
  }, [])



  const [profileinfo, setProfileinfo] = useState([]);

  async function getProfileinfo() {
    const res = await fetch("http://localhost:5000/profile/", {
      method: "PUT",
      headers: { token: localStorage.token }      
    });

    const profileArray = await res.json();
    console.log(profileArray);
    setProfileinfo(profileArray);
  }

  useEffect(() => {
    getProfileinfo();
  })


  if (Status === 1) {
    return <EditProfile />;
  } else {
    return (
      <div>
        <div className="profileHead">
          <div className="profile">
            <div>
  
                <div className="profileData">
                  <div className="dataBoxes" title="Naam">{profileinfo.user_firstname + " "+ profileinfo.user_lastname}</div>
                  <div className="dataBoxes" title="Email">{profileinfo.user_email}</div>
                  <div className="dataBoxes" title="Telefoonnummer">{profileinfo.user_phonenumber}</div>
                  <div className="dataBoxes" title="Straat">{profileinfo.user_street}</div>
                  <div className="dataBoxes" title="Woonplaats">{profileinfo.user_city}</div>
                  <div className="dataBoxes" title="Postcode">{profileinfo.user_postalcode}</div>
                </div>
            
            </div>
            <button className="EditProfile hover effect" title="Profiel bewerken" onClick={() => setStatus(1)}>
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
