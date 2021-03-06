import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";


import Feed from "../Feed/feed";
import Vacature from "../Vacature/vacature";
import Chat from "../Chat/chat";
import Profile from "../Profile/profile";


function Navbar() {
  
  return (
    <div className="navbar">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/Feed" exact component={Feed} />
          <Route path="/Vacature" component={Vacature} />
          <Route path="/Chat" component={Chat} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
