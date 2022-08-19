import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "300px",
    padding: "9px",
    margin: "0 6px 3px",
    background: "pink",
    textDecoration: "none",
    color: "black"
  }; 

  function NavBar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/" style={linkStyles}>My Kids</NavLink></li>
                <li><NavLink to="/kids/new" style={linkStyles}>Add a Kid</NavLink></li>
            </ul>
        </div>
  )}

export default NavBar; 