import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "../Default/sidebar";

import Feed from "../Feed/feed";
import Vacature from "../Vacature/vacature";
import Chat from "../Chat/chat";
import Profile from "../Profile/profile";
import Login from "../Login/login";
import Register from "../Register/register";
import Landingpage from "../Default/landingpage";

function Navigation() {
  
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/is-verify", {
        method: "POST",
        headers: { token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Landingpage {...props}/>}/>
          <Route exact path="/Login" render={props => !isAuthenticated ? ( <Login {...props} setAuth={setAuth}/>) :  ( <Redirect to="/Feed"/> ) }/>
          <Route exact path="/Register" render={props => !isAuthenticated ? ( <Register {...props} setAuth={setAuth}/> ) :  ( <Redirect to="/Feed"/> ) }/>
          <Route exact path="/Feed" render={props => isAuthenticated ? ( <Feed {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Login"/>)}/>
          <Route exact path="/Vacature" render={props => isAuthenticated ? ( <Vacature {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Login"/>)}/>
          <Route exact path="/Chat" render={props => isAuthenticated ? ( <Chat {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Login"/>)}/>
          <Route exact path="/Profile" render={props => isAuthenticated ? ( <Profile {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Login"/>)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default Navigation;
