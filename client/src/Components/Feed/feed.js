import React, { useEffect, useState } from "react";
import "./feed.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { FeedData } from "../Feed/feedData";
import { CardsFeedData } from "./feedCardsData";
import Popup from "../Default/Popup";

const Feed = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  const [value, setValue] = React.useState("Drenthe");
  const [value2, setValue2] = React.useState("Onbetaald");
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

  return (
    <div className="feed-container">
      <div className="feed-header">
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
              <h4>Klik voor meer informatie</h4>
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
              <h4>Klik voor meer informatie</h4>
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
              <h4>Klik voor meer informatie</h4>
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
              <h4>Klik voor meer informatie</h4>
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
              <h4>Klik voor meer informatie</h4>
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
              <h4>Klik voor meer informatie</h4>
            </div>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        </div>
      </div>
    </div>
  );
};

export default Feed;
