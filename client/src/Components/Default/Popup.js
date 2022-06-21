import React, { useEffect, useState } from "react";
import { PromptProps } from "react-router-dom";
import "./popup.css";
import { FeedData } from "../Feed/feedData";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import Chat from "../Chat/chat";
import { useHistory } from "react-router-dom";


function Popup(props) {
  const history = useHistory();
  
  console.log(props.id);

  const id = props.id;


  const [jobinfo, setJobinfo] = useState([]);

  async function getSpecificJobInfo(id) {
    const res = await fetch(`http://localhost:5000/joboffers/${id}`, {
      method: "PUT",
      header : { token: localStorage.token }
    });

    const jobInfo = await res.json();
    setJobinfo(jobInfo);
  }

  useEffect(() => {
    getSpecificJobInfo(id);
  })

  return props.trigger ? (

    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h1>{jobinfo.job_title}</h1>
        </div>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <CloseIcon />
        </button>
        {/* <div className="popup-subheader">
          <h2>{jobinfo.job_description}</h2>
        </div> */}
        <div className="popup-body">
          <p>
            {jobinfo.job_description}
            <br></br>
            <br></br>
            Voor deze functie moet je een aanpakker zijn. Je vindt het leuk om
            in teamverband te werken en klanten tevreden te houden. Tenslotte
            komt jouw beschikbaarheid overeen met de gevraagde werktijden in
            bovenstaand rooster.
          </p>
        </div>
        <div className="popup-div-icons">
          <div className="popup-icons">
            <EuroIcon/>{jobinfo.job_salary}
          </div>
          <div className="popup-icons">
            <LocationOnIcon/>{jobinfo.job_city}
          </div>
          <div className="popup-icons">
            <AccessTimeIcon/>{jobinfo.job_employment}
          </div>
          <div className="popup-icons">
            <CalendarMonthIcon/>{jobinfo.job_created_at}
          </div>
        </div>
        <div className="popup-footer">
          <button className="openChat" title="Open chat">
              Ik wil solliciteren
          </button>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}


export default Popup;
