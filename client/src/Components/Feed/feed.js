// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import "./feed.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { FeedData } from "../Feed/feedData";
import { CardsFeedData } from "./feedCardsData";
import Popup from "../Default/Popup";

const Feed = ({ setAuth }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  const [value, setValue] = React.useState("Drenthe");
  const [value2, setValue2] = React.useState("Alle");
  const [value3, setValue3] = React.useState("Alle");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <button onClick={(e) => logout(e)} className="btn btn-primary">
          Logout
        </button>
        <div className="feed-header-searchdiv">
          {/* <SearchIcon></SearchIcon> */}
          <select
            value={value}
            onChange={handleChange}
            //type="search"
            //placeholder="Zoeken"
            className="feed-searchbar"
          >
            {FeedData[0].map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <select
            value={value2}
            onChange={handleChange2}
            className="feed-searchbar"
          >
            {FeedData[1].map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <select
            value={value3}
            onChange={handleChange3}
            className="feed-searchbar"
          >
            {FeedData[2].map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="feed-body">
        <div className="feed-vacature-cards">
          <div className="card">
            <div className="feed-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
              <div className="feed-vacature-icon">
                <IconButton onClick={handleClick}>
                  {!state ? (
                    <StarBorderIcon sx={{ color: "darkorange" }} />
                  ) : (
                    <StarIcon sx={{ color: "darkorange" }} />
                  )}
                </IconButton>
              </div>
            </div>
            <div className="feed-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="feed-vacature-div-icons">
              <div className="feed-vacature-icons">
                <EuroIcon></EuroIcon>5,50
              </div>
              <div className="feed-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Drenthe
              </div>
              <div className="feed-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Fulltime
              </div>
              <div className="feed-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>18-05-2022
              </div>
            </div>
            <div className="feed-vacature-info">
              <h4 onClick={() => setButtonPopup(true)}>
                Klik voor meer informatie
              </h4>
            </div>
          </div>
          <div className="card">
            <div className="feed-vacature-function">
              <h2>Assistent Boerderij</h2>
              <div className="feed-vacature-icon">
                <IconButton onClick={handleClick}>
                  {!state ? (
                    <StarBorderIcon sx={{ color: "darkorange" }} />
                  ) : (
                    <StarIcon sx={{ color: "darkorange" }} />
                  )}
                </IconButton>
              </div>
            </div>
            <div className="feed-vacature-workplace">
              <h4>de Buytenhof</h4>
            </div>
            <div className="feed-vacature-div-icons">
              <div className="feed-vacature-icons">
                <EuroIcon></EuroIcon>6,00
              </div>
              <div className="feed-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Amsterdam
              </div>
              <div className="feed-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Parttime
              </div>
              <div className="feed-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>12-05-2022
              </div>
            </div>
            <div className="feed-vacature-info">
              <h4 onClick={() => setButtonPopup(true)}>
                Klik voor meer informatie
              </h4>
            </div>
          </div>
          <div className="card">
            <div className="feed-vacature-function">
              <h2>Vakkenvuller</h2>
              <div className="feed-vacature-icon">
                <IconButton onClick={handleClick}>
                  {!state ? (
                    <StarBorderIcon sx={{ color: "darkorange" }} />
                  ) : (
                    <StarIcon sx={{ color: "darkorange" }} />
                  )}
                </IconButton>
              </div>
            </div>
            <div className="feed-vacature-workplace">
              <h4>Albert Heijn</h4>
            </div>
            <div className="feed-vacature-div-icons">
              <div className="feed-vacature-icons">
                <EuroIcon></EuroIcon>6,50
              </div>
              <div className="feed-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Utrecht
              </div>
              <div className="feed-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Fulltime
              </div>
              <div className="feed-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>18-05-2022
              </div>
            </div>
            <div className="feed-vacature-info">
              <h4 onClick={() => setButtonPopup(true)}>
                Klik voor meer informatie
              </h4>
            </div>
          </div>
          <div className="card">
            <div className="feed-vacature-function">
              <h2>Vulploegmedewerker</h2>
              <div className="feed-vacature-icon">
                <IconButton onClick={handleClick}>
                  {!state ? (
                    <StarBorderIcon sx={{ color: "darkorange" }} />
                  ) : (
                    <StarIcon sx={{ color: "darkorange" }} />
                  )}
                </IconButton>
              </div>
            </div>
            <div className="feed-vacature-workplace">
              <h4>Jumbo</h4>
            </div>
            <div className="feed-vacature-div-icons">
              <div className="feed-vacature-icons">
                <EuroIcon></EuroIcon>4,50
              </div>
              <div className="feed-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Rotterdam
              </div>
              <div className="feed-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Parttime
              </div>
              <div className="feed-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>13-05-2022
              </div>
            </div>
            <div className="feed-vacature-info">
              <h4 onClick={() => setButtonPopup(true)}>
                Klik voor meer informatie
              </h4>
            </div>
          </div>
          <div className="card">
            <div className="feed-vacature-function">
              <h2>Afwasser</h2>
              <div className="feed-vacature-icon">
                <IconButton onClick={handleClick}>
                  {!state ? (
                    <StarBorderIcon sx={{ color: "darkorange" }} />
                  ) : (
                    <StarIcon sx={{ color: "darkorange" }} />
                  )}
                </IconButton>
              </div>
            </div>
            <div className="feed-vacature-workplace">
              <h4>SHABU SHABU</h4>
            </div>
            <div className="feed-vacature-div-icons">
              <div className="feed-vacature-icons">
                <EuroIcon></EuroIcon>5,50
              </div>
              <div className="feed-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Limburg
              </div>
              <div className="feed-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Fulltime
              </div>
              <div className="feed-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>12-05-2022
              </div>
            </div>
            <div className="feed-vacature-info">
              <h4 onClick={() => setButtonPopup(true)}>
                Klik voor meer informatie
              </h4>
            </div>
          </div>
          <div className="card">
            <div className="feed-vacature-function">
              <h2>Krantenwijk</h2>
              <div className="feed-vacature-icon">
                <IconButton onClick={handleClick}>
                  {!state ? (
                    <StarBorderIcon sx={{ color: "darkorange" }} />
                  ) : (
                    <StarIcon sx={{ color: "darkorange" }} />
                  )}
                </IconButton>
              </div>
            </div>
            <div className="feed-vacature-workplace">
              <h4>Spotta</h4>
            </div>
            <div className="feed-vacature-div-icons">
              <div className="feed-vacature-icons">
                <EuroIcon></EuroIcon>3,50
              </div>
              <div className="feed-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Rotterdam
              </div>
              <div className="feed-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Parttime
              </div>
              <div className="feed-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>05-05-2022
              </div>
            </div>
            <div className="feed-vacature-info">
              <h4 onClick={() => setButtonPopup(true)}>
                Klik voor meer informatie
              </h4>
            </div>
          </div>
          <div className="card">
            <div className="feed-vacature-function">
              <h2>Fulltime vulploegmedewerker</h2>
              <div className="feed-vacature-icon">
                <IconButton onClick={handleClick}>
                  {!state ? (
                    <StarBorderIcon sx={{ color: "darkorange" }} />
                  ) : (
                    <StarIcon sx={{ color: "darkorange" }} />
                  )}
                </IconButton>
              </div>
            </div>
            <div className="feed-vacature-workplace">
              <h4>Lidl</h4>
            </div>
            <div className="feed-vacature-div-icons">
              <div className="feed-vacature-icons">
                <EuroIcon></EuroIcon>Salaris
              </div>
              <div className="feed-vacature-icons">
                <LocationOnIcon></LocationOnIcon>Plaats
              </div>
              <div className="feed-vacature-icons">
                <AccessTimeIcon></AccessTimeIcon>Dienstverband
              </div>
              <div className="feed-vacature-icons">
                <CalendarMonthIcon></CalendarMonthIcon>Datum
              </div>
            </div>
            <div className="feed-vacature-info">
              <h4 onClick={() => setButtonPopup(true)}>
                Klik voor meer informatie
              </h4>
            </div>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        </div>
      </div>
    </div>
  );
};

export default Feed;
