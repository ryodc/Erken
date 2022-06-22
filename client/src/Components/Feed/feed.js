// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import "./feed.css";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { FeedData } from "../Feed/feedData";
import Popup from "../Default/Popup";
import Sidebar from "../Default/sidebar";
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from 'react-router-dom'

const Feed = ({ setAuth }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  const [value, setValue] = React.useState("Over");
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

  const [addPopup, setAddPopup] = useState(false);

  const [jobid, setJobid] = useState("");
// LOGOUT BUTTON
  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };
// Load all joboffers
  const [joboffers, setJoboffers] = useState([]);

  async function getJoboffers() {
    const res = await fetch("http://localhost:5000/joboffers/", {
      method: "PUT",
      headers: { token: localStorage.token }
    });

    const JoboffersArray = await res.json();
    setJoboffers(JoboffersArray);
  }
  useEffect(() => {
    getJoboffers();
  })

// delete function button
  async function deletepost(id) {
    try {
      const res = await fetch(`http://localhost:5000/joboffers/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token }
      });
    } catch (error) {
      console.error(error.message);
    }
  }

// make likedjob
// function liked jobs
// request staat in server/routes/likedjobs
// Star button likedjob toevoegd



async function likePost(id){
  try {
    const res = await fetch(`http://localhost:5000/likedjobs/${id}`, {
      method: "POST",
      headers : {
        token: localStorage.token
      }
    });

    const response = await res.json();
  } catch (err) {
    console.error(err.message);
  }
}


  return (
    <div className="feed-container">
      <Sidebar/>
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
        <button onClick={(e) => logout(e)} className="logoutbutton">
          <LogoutIcon /> 
          <span>Uitloggen</span>
        </button>
      </div>
      <div className="feed-body">
        <div className="feed-vacature-cards">
          {joboffers.map(joboffers => {
            return (
              <div className="card">
              <div className="feed-vacature-function">
                <h2>{joboffers.job_title}</h2>
                <div className="feed-vacature-icon">
                  <IconButton onClick={() => likePost(joboffers.job_id)}>
                    <StarBorderIcon/>
                  </IconButton>
                </div>
                <div></div>
                  <span class="delete-vacature-icon">
                  <button className="delete-vacature-button" onClick={() => deletepost(joboffers.job_id)}>
                    <DeleteIcon />
                  </button>
                </span>
              </div>
              {/* <div className="feed-vacature-workplace">
                <h4>{joboffers.job_description}</h4>
              </div> */}
              <div className="feed-vacature-div-icons">
                <div className="feed-vacature-icons">
                  <EuroIcon></EuroIcon>{joboffers.job_salary}
                </div>
                <div className="feed-vacature-icons">
                  <LocationOnIcon></LocationOnIcon>{joboffers.job_city}
                </div>
                <div className="feed-vacature-icons">
                  <AccessTimeIcon></AccessTimeIcon>{joboffers.job_employment}
                </div>
                <div className="feed-vacature-icons">
                  <CalendarMonthIcon></CalendarMonthIcon>{joboffers.job_created_at.substr(0, 10)}
                </div>
              </div>
              <div className="feed-vacature-info">
                <h4 onClick={() => {setButtonPopup(true); setJobid(joboffers.job_id); }}>
                  Klik voor meer informatie
                </h4>
              </div>
            </div>
            )
          })}
        </div>
      </div>
      <Link to="/addvacature">
       <button className="add-vacature-button" path="/Feedvacature">
         <AddIcon className="icon"/>
       </button>
      </Link>
      <Popup id={jobid} trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </div>
  );
};

export default Feed;
