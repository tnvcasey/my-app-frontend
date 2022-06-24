import React from "react"
import { NavLink } from "react-router-dom"


function KidCard({ kid }){



    return(
        <li>
            <img src={kid.img_src} width="200" height="200" />
            <NavLink to={`/kids/${kid.id}`}>{kid.name} ({kid.age})</NavLink>
            <button className="secondary">Delete</button>
            <button className="kid">Memories</button>
        </li>

    )

}



export default KidCard;