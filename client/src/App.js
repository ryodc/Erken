// import "./App.css";
// import React from "react";
// import Navigation from "./Components/Navbar/navbar";

// import { toast } from "react-toastify";


// const App = () => {
//   return <Navigation />;
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Feed from "./components/Feed/feed";
import Vacature from "./components/Vacature/vacature";
import Chat from "./components/Chat/chat";
import Profile from "./components/Profile/profile";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Landingpage from "./components/Default/landingpage";
import AddVacature from "./components/Feed/addVacature"

function App() {
  
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
          <Route path="/Login" render={props => !isAuthenticated ? ( <Login {...props} setAuth={setAuth}/>) :  ( <Redirect to="/Feed"/> ) }/>
          <Route path="/Register" render={props => !isAuthenticated ? ( <Register {...props} setAuth={setAuth}/> ) :  ( <Redirect to="/Feed"/> ) }/>
          <Route path="/Feed" render={props => isAuthenticated ? ( <Feed {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Login"/>)}/>
          <Route exact path="/Vacature" render={props => isAuthenticated ? ( <Vacature {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Vacature"/>)}/>
          <Route path="/Chat" render={props => isAuthenticated ? ( <Chat {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Chat"/>)}/>
          <Route path="/Profile" render={props => isAuthenticated ? ( <Profile {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Profile"/>)}/>
          <Route path="/Addvacature" render={props => isAuthenticated ? ( <AddVacature {...props} setAuth={setAuth}/> ) : ( <Redirect to="/Addvacature"/>)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
