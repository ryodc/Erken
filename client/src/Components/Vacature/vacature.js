import React, { useState, useEffect } from "react";
import "./vacature.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EuroIcon from '@mui/icons-material/Euro';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Checkbox from '@mui/material/Checkbox';
import Logo from "../Images/ErkenLogoScalable.png";
import DeleteIcon from '@mui/icons-material/Delete';
/*
import LockIcon from "@mui/icons-material/Lock";
*/
import Sidebar from "../Default/sidebar";
import Popup from "../Default/Popup";

const Vacature = ({ setAuth }) => {

  const [likedjobs, setLikedJobs] = useState([]);

  const [buttonPopup, setButtonPopup] = useState(false);

  const [jobid, setJobid] = useState("");


  async function likedJobs() {
    try {
      const response = await fetch("http://localhost:5000/likedjobs/getlikedjobs", {
        method: "GET",
        headers: {
          token : localStorage.token,
        }
      });
      const likedJobsArray = await response.json();
      console.log(likedJobsArray);
      setLikedJobs(likedJobsArray);
    } catch (e){
      console.error(e.message);
    }
  }

  useEffect(() => {
    likedJobs();
  })

  // Delete
  async function deletelikedjob(id) {
    try{
      const res = await fetch(`http://localhost:5000/likedjobs/${id}`, {
        method: "DELETE",
        headers: { token : localStorage.token}
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  

  return (
    <div>
      <Sidebar/>
    <div className="feed-container">
      <div className="feed-header">
      </div>
      <div className="feed-body">
        <div className="feed-vacature-cards">
          {likedjobs.map(likedjob => {
            return (
              <div className="card">
                <div className="vacature-vacature-function">
                  <h2>{likedjob.job_title}</h2>
                  <span class="delete-vacature-icon">
                    <button className="del-vacature-button" onClick={() => deletelikedjob(likedjob.job_id)}>
                      <DeleteIcon />
                    </button>
                  </span>
                </div>
                <div className="feed-vacature-div-icons">
                  <div className="feed-vacature-icons">
                    <EuroIcon></EuroIcon>{likedjob.job_salary}
                  </div>
                  <div className="feed-vacature-icons">
                    <LocationOnIcon></LocationOnIcon>{likedjob.job_city}
                  </div>
                  <div className="feed-vacature-icons">
                    <AccessTimeIcon></AccessTimeIcon>{likedjob.job_employment}
                  </div>
                  <div className="feed-vacature-icons">
                    <CalendarMonthIcon></CalendarMonthIcon>{likedjob.job_created_at.substr(0, 10)}
                  </div>
                </div>
                <div onClick={() => {setButtonPopup(true); setJobid(likedjob.job_id); }} className="feed-vacature-info">
                  <h4>Klik voor meer informatie</h4>
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </div>
      <Popup id={jobid} trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </div>
  );
};
export default Vacature;
