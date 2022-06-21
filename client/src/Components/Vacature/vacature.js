import React, { useState } from "react";
import "./vacature.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EuroIcon from '@mui/icons-material/Euro';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Checkbox from '@mui/material/Checkbox';
import Logo from "../Images/ErkenLogoScalable.png";
/*
import LockIcon from "@mui/icons-material/Lock";
*/

const Vacature = ({ setAuth }) => {

  return (
    <div className="vacature-container">
      <div className="vacature-header">
        <div className="vacature-header-searchdiv">
          <SearchIcon></SearchIcon>
          <input
            className="vacature-searchbar"
            type="search"
            placeholder="Zoeken"
          ></input>
          {/* <ArrowForwardIcon></ArrowForwardIcon> */}
        </div>
      </div>
      <div className="vacature-body">
        <div className="vacature-vacature-cards">
          <div className="card">
            <div className="vacature-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
            </div>
            <div className="vacature-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="vacature-vacature-div-icons">
              <div className="vacature-vacature-icons">
                <EuroIcon></EuroIcon>Salaris
              </div>
              <div className="vacature-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Plaats
              </div>
              <div className="vacature-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Dienstverband
              </div>
              <div className="vacature-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>Datum
              </div>
            </div>
            <div className="vacature-vacature-info">
              <h4>Klik voor meer informatie</h4>
            </div>
          </div>
          <div className="card">
            <div className="vacature-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
            </div>
            <div className="vacature-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="vacature-vacature-div-icons">
              <div className="vacature-vacature-icons">
                <EuroIcon></EuroIcon>Salaris
              </div>
              <div className="vacature-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Plaats
              </div>
              <div className="vacature-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Dienstverband
              </div>
              <div className="vacature-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>Datum
              </div>
            </div>
            <div className="vacature-vacature-info">
              <h4>Klik voor meer informatie</h4>
            </div>
          </div>
          <div className="card">
            <div className="vacature-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
            </div>
            <div className="vacature-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="vacature-vacature-div-icons">
              <div className="vacature-vacature-icons">
                <EuroIcon></EuroIcon>Salaris
              </div>
              <div className="vacature-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Plaats
              </div>
              <div className="vacature-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Dienstverband
              </div>
              <div className="vacature-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>Datum
              </div>
            </div>
            <div className="vacature-vacature-info">
              <h4>Klik voor meer informatie</h4>
            </div>
          </div>
          <div className="card">
            <div className="vacature-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
            </div>
            <div className="vacature-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="vacature-vacature-div-icons">
              <div className="vacature-vacature-icons">
                <EuroIcon></EuroIcon>Salaris
              </div>
              <div className="vacature-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Plaats
              </div>
              <div className="vacature-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Dienstverband
              </div>
              <div className="vacature-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>Datum
              </div>
            </div>
            <div className="vacature-vacature-info">
              <h4>Klik voor meer informatie</h4>
            </div>
          </div>
          <div className="card">
            <div className="vacature-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
            </div>
            <div className="vacature-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="vacature-vacature-div-icons">
              <div className="vacature-vacature-icons">
                <EuroIcon></EuroIcon>Salaris
              </div>
              <div className="vacature-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Plaats
              </div>
              <div className="vacature-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Dienstverband
              </div>
              <div className="vacature-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>Datum
              </div>
            </div>
            <div className="vacature-vacature-info">
              <h4>Klik voor meer informatie</h4>
            </div>
          </div>
          <div className="card">
            <div className="vacature-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
            </div>
            <div className="vacature-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="vacature-vacature-div-icons">
              <div className="vacature-vacature-icons">
                <EuroIcon></EuroIcon>Salaris
              </div>
              <div className="vacature-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Plaats
              </div>
              <div className="vacature-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Dienstverband
              </div>
              <div className="vacature-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>Datum
              </div>
            </div>
            <div className="vacature-vacature-info">
              <h4>Klik voor meer informatie</h4>
            </div>
          </div>
          <div className="card">
            <div className="vacature-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
            </div>
            <div className="vacature-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="vacature-vacature-div-icons">
              <div className="vacature-vacature-icons">
                <EuroIcon></EuroIcon>Salaris
              </div>
              <div className="vacature-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Plaats
              </div>
              <div className="vacature-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Dienstverband
              </div>
              <div className="vacature-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>Datum
              </div>
            </div>
            <div className="vacature-vacature-info">
              <h4>Klik voor meer informatie</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vacature;
