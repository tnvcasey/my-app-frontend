import React from "react";
import { NavLink } from "react-router-dom";

//const linkStyles = {
   // display: "inline-block",
    //width: "80px",
    //padding: "9px",
    //margin: "0 6px 3px",
    //background: "gold",
    //textDecoration: "none",
    //color: "white",
  //}; 

  function NavBar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/kids">My Kids</NavLink></li>
                <li><NavLink to="/kids/new">Add a Kid</NavLink></li>
                <li><NavLink to="/memories/new">Add New Memory</NavLink></li>
            </ul>
        </div>
  )}

export default NavBar; 