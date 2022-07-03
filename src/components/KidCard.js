import React from "react"
import { NavLink } from "react-router-dom"


function KidCard({ kid }){



    return(
        <li>
            <img src={kid.img_src} width="200" height="200"  />
            <h3>{kid.name}</h3>
            <NavLink to={`/kids/${kid.id}`}>Memories</NavLink>
            <button className="secondary">Delete</button>
        </li>

    )

}



export default KidCard;