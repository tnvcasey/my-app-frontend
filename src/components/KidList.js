import React from "react"
import KidCard from "./KidCard";

function KidList({kids}) {

    return(
        <div>
            <h2 className="kids">My Kids</h2>
            <ul className="cards">
                {kids.map((kid) => (
                    <KidCard key={kid.id} kid={kid} />
                ))}
            </ul>
        </div>
    )



}

export default KidList; 