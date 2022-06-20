import React, { useState, useEffect } from "react";
import "./profileinfo.css";

import LockIcon from "@mui/icons-material/Lock";
import EditProfile from "./editprofile.js";

export default function ProfileInfo() {
  const [Status, setStatus] = useState(0);

  const [Naam, setNaam] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefoonnummer, setTelefoonnummer] = useState("");
  const [Emailverzorger, setEmailverzorger] = useState("");
  const [Telefoonnummerverzorger, setTelefoonnummerverzorger] = useState("");
  const [Straat, setStraat] = useState("");
  const [Huisnummer, setHuisnummer] = useState("");
  const [Woonplaats, setWoonplaats] = useState("");
  const [Postcode, setPostcode] = useState("");

  const loadValues = async () => {
    setNaam(localStorage.getItem("Naam"));
    setEmail(localStorage.getItem("Email"));
    setTelefoonnummer(localStorage.getItem("Telefoonnummer"));
    setEmailverzorger(localStorage.getItem("Emailverzorger"));
    setTelefoonnummerverzorger(localStorage.getItem("Telefoonnummerverzorger"));
    setStraat(localStorage.getItem("Straat"));
    setHuisnummer(localStorage.getItem("Huisnummer"));
    setWoonplaats(localStorage.getItem("Woonplaats"));
    setPostcode(localStorage.getItem("Postcode"));
  }

  const setValues = async () => {
    localStorage.setItem("Username", "Testuser");
    localStorage.setItem("Naam", "Naam");
    localStorage.setItem("Email", "Email");
    localStorage.setItem("Telefoonnummer", "Telefoonnummer");
    localStorage.setItem("Emailverzorger", "Email verzorger");
    localStorage.setItem("Telefoonnummerverzorger", "Telefoonnummer verzorger");
    localStorage.setItem("Straat", "Straat");
    localStorage.setItem("Huisnummer", "Huisnummer");
    localStorage.setItem("Woonplaats", "Woonplaats");
    localStorage.setItem("Postcode", "Postcode");
  }

  useEffect(() => {
    setValues()
    loadValues()
  }, [])

  if (Status === 1) {
    return <EditProfile />;
  } else {
    return (
      <div>
        <div className="profileHead">
          <div className="profile">
            <div>
  
                <div className="profileData">
                  <div className="dataBoxes" title="Naam">{Naam}</div>
                  <div className="dataBoxes" title="Email">{Email}</div>
                  <div className="dataBoxes" title="Telefoonnummer">{Telefoonnummer}</div>
                  <div className="dataBoxes" title="Email verzorger">{Emailverzorger}</div>
                  <div className="dataBoxes" title="Telefoonnummer verzorger">{Telefoonnummerverzorger}</div>
                  <div className="dataBoxes" title="Straat">{Straat}</div>
                  <div className="dataBoxes" title="Huisnummer">{Huisnummer}</div>
                  <div className="dataBoxes" title="Woonplaats">{Woonplaats}</div>
                  <div className="dataBoxes" title="Postcode">{Postcode}</div>
                </div>
            
            </div>
            <button className="EditProfile hover effect" title="Profiel bewerken" onClick={() => setStatus(1)}>
              <LockIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

/*
                  <div className="dataBoxes" title="Naam">Hogeschool Rotterdam</div>
                  <div className="dataBoxes" title="Email">hr@outlook.com</div>
                  <div className="dataBoxes" title="Telefoonnummer">010 794 4000</div>
                  <div className="dataBoxes" title="Email verzorger">0000000@hr.nl</div>
                  <div className="dataBoxes" title="Telefoonnummer verzorger">010 794 4000</div>
                  <div className="dataBoxes" title="Straat">Wijnhaven</div>
                  <div className="dataBoxes" title="Huisnummer">107</div>
                  <div className="dataBoxes" title="Woonplaats">Rotterdam</div>
                  <div className="dataBoxes" title="Postcode">3011 WN</div>

*/