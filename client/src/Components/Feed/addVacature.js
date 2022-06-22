import React, { useEffect, useState } from "react";
import { PromptProps } from "react-router-dom";
import "./addVacature.css";
import { FeedData } from "../Feed/feedData";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import Chat from "../Chat/chat";
import { Link } from "react-router-dom";



const AddVacature = () => {
    const [inputs, setInputs] = useState({
    jobtitle: "",
    jobdescription: "",
    jobsalary: "",
    jobcity: "",
    jobemployment: ""
    });

    const { jobtitle, jobdescription, jobsalary, jobcity, jobemployment } = inputs;

    const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
    try {
        const body = { jobtitle, jobdescription, jobsalary, jobcity, jobemployment };

        const response = await fetch(
          "http://localhost:5000/joboffers/addjoboffer",
        {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          token : localStorage.token
        },
        body: JSON.stringify(body)
        });

        const parseResponse = await response.json();
        console.log(parseResponse);    


        } catch (error) {
      console.error(error.message);
    }
  }  

    return (
    <div className="container">
        <h1 className="logo">
            <font color="DF482E">Er</font>
            <font color="273677">ken</font>
        </h1>

        <div className="Box">
            <div className="">
                 <h1>Vacature toevoegen</h1>
            </div>

            <form className="column" onSubmit={onSubmitForm}>
                 <input
                    type="text"
                    name="jobtitle"
                    value={jobtitle}
                    className="vacature-Input"
                    onChange={e => onChange(e)}
                    placeholder="Functie"
                    />
                <textarea
                    type="text"
                    name="jobdescription"
                    value={jobdescription}
                    id="desc"
                    className="vacature-Input"
                    onChange={e => onChange(e)}
                    placeholder="Baan omschrijving"
                    />
                <input
                    type="text"
                    name="jobsalary"
                    value={jobsalary}
                    className="vacature-Input"
                    onChange={e => onChange(e)}
                    placeholder="Uurloon"
                    />
                <input
                    type="text"
                    name="jobcity"
                    value={jobcity}
                    className="vacature-Input"
                    onChange={e => onChange(e)}
                    placeholder="Provincie"
                    />
                <input
                    type="text"
                    name="jobemployment"
                    value={jobemployment}
                    className="vacature-Input"
                    onChange={e => onChange(e)}
                    placeholder="Dienstverband"
                    />
            <input className="Submit" type="submit" value="Toevoegen"/>
            </form>
            <Link to="/feed">Terug</Link>
        </div>

    </div>
  )
}

export default AddVacature