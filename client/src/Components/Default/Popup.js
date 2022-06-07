import React from "react";
import { PromptProps } from "react-router-dom";
import "./popup.css";
import { FeedData } from "../Feed/feedData";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h1>Vulploegmedewerker</h1>
        </div>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <CloseIcon></CloseIcon>
        </button>
        <div className="popup-subheader">
          <h2>Lidl</h2>
        </div>
        <div className="popup-body">
          <p>
            Als vulploegmedewerker bij Albert Heijn help je bij het lossen van
            de vrachtwagens en vul je de schappen. Je zorgt ervoor dat de winkel
            er verzorgd uitziet en je helpt klanten als zij een product niet
            kunnen vinden. Dit doe je samen met jouw team. Zo help je elkaar en
            is het iedere dag weer gezellig.
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
            <EuroIcon></EuroIcon>Salaris
          </div>
          <div className="popup-icons">
            <LocationOnIcon></LocationOnIcon>Plaats
          </div>
          <div className="popup-icons">
            <AccessTimeIcon></AccessTimeIcon>Dienstverband
          </div>
          <div className="popup-icons">
            <CalendarMonthIcon></CalendarMonthIcon>Datum
          </div>
        </div>
        <div className="popup-footer">
          <button>Ik wil solliciteren</button>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
