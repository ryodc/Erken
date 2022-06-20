import React, { useState } from "react";
import "./feed.css";
import IconButton from '@mui/material/IconButton';
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Feed = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <div className="feed-header-searchdiv">
          <SearchIcon></SearchIcon>
          <input
            className="feed-searchbar"
            type="search"
            placeholder="Zoeken"
          ></input>
          {/* <ArrowForwardIcon></ArrowForwardIcon> */}
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
        </div>
      </div>
    </div>
  );
};

export default Feed;
