import React from "react";
import { NavLink } from 'react-router-dom'

function MemoryCard({ memory }){
    return(
        <div>
            <h2>{memory.body}</h2>
            <h4>{memory.date}</h4>
            <NavLink to={`/memories/${memory.id}`}>--{memory.kid.name}'s Memory--</NavLink>
            <br />
            <button>Delete Memory</button>
        </div>
    )
}

export default MemoryCard; 