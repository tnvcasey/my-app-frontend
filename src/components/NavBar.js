import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "9px",
    margin: "0 6px 3px",
    background: "pink",
    textDecoration: "none",
    color: "black",
  }; 

  function NavBar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/" style={linkStyles}>Home</NavLink></li>
                <li><NavLink to="/kids" style={linkStyles}>My Kids</NavLink></li>
                <li><NavLink to="/kids/new" style={linkStyles}>Add a Kid</NavLink></li>
                <li><NavLink to="/memories" style={linkStyles}>All Memories</NavLink></li>
            </ul>
        </div>
  )}

export default NavBar; 