import React, { useState, useEffect } from "react"
import KidCard from "./KidCard";

function KidList() {

    const [kids, setKids] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/kids")
            .then(res => res.json())
            .then(kids => setKids(kids))
    }, [])

    function handleAddKid(newKid){
        const updatedKids = [...kids, newKid]
        setKids(updatedKids)
    }


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