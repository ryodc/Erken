import React, { useState, useEffect } from "react";
import "./profileinfo.css";

import EditIcon from '@mui/icons-material/Edit';
import EditProfile from "./editprofile.js";

export default function ProfileInfo() {
  const [Status, setStatus] = useState(0);

  const [Naam, setNaam] = useState();
  const [Email, setEmail] = useState();
  const [Telefoonnummer, setTelefoonnummer] = useState();
  const [Straat, setStraat] = useState();
  const [Woonplaats, setWoonplaats] = useState();
  const [Postcode, setPostcode] = useState();

  const loadValues = async () => {
    setNaam(localStorage.getItem('Naam'));
    setEmail(localStorage.getItem('Email'));
    setTelefoonnummer(localStorage.getItem('Telefoonnummer'));
    setStraat(localStorage.getItem('Straat'));
    setWoonplaats(localStorage.getItem('Woonplaats'));
    setPostcode(localStorage.getItem('Postcode'));
  }

  const setValues = async () => {
    localStorage.setItem('Username', 'Testuser');
    localStorage.setItem('Naam', 'Hogeschool Rotterdam');
    localStorage.setItem('Email', '10000000@hr.nl');
    localStorage.setItem('Telefoonnummer', '010-12345678');
    localStorage.setItem('Straat', 'Teststraat');
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
    if(profileinfo.length > 0) {
      return (
        <div className="profileHead">
          <div className="profile">
          
            <div className="profileData">
              <div className="dataBoxes">
                {profileinfo[0].Naam}
              </div>
              <div className="dataBoxes">
                {profileinfo[0].Email}
              </div>
              <div className="dataBoxes">
                {profileinfo[0].Telefoonnummer}
              </div>
              <div className="dataBoxes">
                {profileinfo[0].Straat}
              </div>
              <div className="dataBoxes">
                {profileinfo[0].Woonplaats}
              </div>
              <div className="dataBoxes">
                {profileinfo[0].Postcode}
              </div>
            </div>
            
            <button className="EditProfile hover effect" title="Profiel bewerken" onClick={() => setStatus(1)}>
              <EditIcon />
            </button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div className="profileHead">
            <div className="profile">
              <div>



                  <div className="profileData">
                    <div className="dataBoxes" title="Naam">{Naam}</div>
                    <div className="dataBoxes" title="Email">{Email}</div>
                    <div className="dataBoxes" title="Telefoonnummer">{Telefoonnummer}</div>
                    <div className="dataBoxes" title="Straat">{Straat}</div>
                    <div className="dataBoxes" title="Woonplaats">{Woonplaats}</div>
                    <div className="dataBoxes" title="Postcode">{Postcode}</div>
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
}
