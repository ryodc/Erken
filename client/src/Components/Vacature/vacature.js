import React from "react";
import "./vacature.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EuroIcon from '@mui/icons-material/Euro';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Checkbox from '@mui/material/Checkbox';
import Logo from "../Images/ErkenLogoScalable.png";
/*
import LockIcon from "@mui/icons-material/Lock";
*/

const Vacature = () => {
  return (
    <div className="profileHead">
      <div>
            <input className="Searchbar" placeholder="Zoeken"></input>
      </div>
      <div className="VacatureContainer">
        <div className="VacaturePost">
          <div><h1>Bedrijf</h1></div>
          <div><h1>Functie</h1></div>
          <div><EuroIcon></EuroIcon>Salaris</div>
          <div><LocationOnIcon></LocationOnIcon>Plaats</div>
          <div><AccessTimeIcon></AccessTimeIcon>Dienstverband</div>
          <div><CalendarMonthIcon></CalendarMonthIcon>Datum</div>
        </div>
        <div className="VacatureFilter">
        <Checkbox></Checkbox>
        </div>
      </div>
    </div>
  );
};
export default Vacature;
