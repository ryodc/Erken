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
    <div className="Vacature">
      <div className="VacatureContainer">
        <div className="VacaturePost">
          <div className= "Header">
            <h1>Bedrijf</h1>
            <h2>Functie</h2>
          </div>
          <div className="VacatureInfo">
            <EuroIcon></EuroIcon>Salaris
            <LocationOnIcon></LocationOnIcon>Plaats
            <AccessTimeIcon></AccessTimeIcon>Dienstverband
            <CalendarMonthIcon></CalendarMonthIcon>Datum
          </div>
        </div>
        <div className="VacaturePost">
        </div>
      </div>
      <div className="VacatureFilter">
        <h2>Vacaturefilter</h2>
        <div><Checkbox></Checkbox>In Afwachting</div>
        <div><Checkbox></Checkbox>Bericht Ontvangen</div>
        <div><Checkbox></Checkbox>hallo</div>
      </div>
    </div>
    </div>
  );
};
export default Vacature;
