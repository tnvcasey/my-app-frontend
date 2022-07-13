import React from "react"
import { NavLink } from "react-router-dom"


function KidCard({ kid, handleDelete }){

    function kidDelete() {
        fetch(`http://localhost:9292/kids/${kid.id}`, {
            method: "DELETE", 
        })
            .then((res) => res.json())
            .then((deletedKid) => handleDelete(deletedKid))
    }



    return(
        <div>
            <img src={kid.img_src} width="200" height="200" />
            <h3>{kid.name}</h3>
            <NavLink to={`/kids/${kid.id}`}>Memories</NavLink>
            <button onClick={(kidDelete)} className="secondary">Delete</button>
        </div>

    )

}



export default KidCard;
