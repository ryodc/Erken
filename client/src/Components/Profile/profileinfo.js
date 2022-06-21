import React, { useState, useEffect } from "react";
import "./profileinfo.css";

import EditIcon from '@mui/icons-material/Edit';
import EditProfile from "./editprofile.js";

export default function ProfileInfo() {
  const [Status, setStatus] = useState(0);

  const [Naam, setNaam] = useState();
  const [Email, setEmail] = useState();
  const [Telefoonnummer, setTelefoonnummer] = useState();
  const [Emailverzorger, setEmailverzorger] = useState();
  const [Telefoonnummerverzorger, setTelefoonnummerverzorger] = useState();
  const [Straat, setStraat] = useState();
  const [Huisnummer, setHuisnummer] = useState();
  const [Woonplaats, setWoonplaats] = useState();
  const [Postcode, setPostcode] = useState();

  const loadValues = async () => {
    setNaam(localStorage.getItem('Naam'));
    setEmail(localStorage.getItem('Email'));
    setTelefoonnummer(localStorage.getItem('Telefoonnummer'));
    setEmailverzorger(localStorage.getItem('Emailverzorger'));
    setTelefoonnummerverzorger(localStorage.getItem('Telefoonnummerverzorger'));
    setStraat(localStorage.getItem('Straat'));
    setHuisnummer(localStorage.getItem('Huisnummer'));
    setWoonplaats(localStorage.getItem('Woonplaats'));
    setPostcode(localStorage.getItem('Postcode'));
  }

  const setValues = async () => {
    localStorage.setItem('Username', 'Testuser');
    localStorage.setItem('Naam', 'Hogeschool Rotterdam');
    localStorage.setItem('Email', '10000000@hr.nl');
    localStorage.setItem('Telefoonnummer', '010-12345678');
    localStorage.setItem('Emailverzorger', 'asdf@gmail.com');
    localStorage.setItem('Telefoonnummerverzorger', '010-12345678');
    localStorage.setItem('Straat', 'Teststraat');
    localStorage.setItem('Huisnummer', '1');
    localStorage.setItem('Woonplaats', 'Rotterdam');
    localStorage.setItem('Postcode', '3035');
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
