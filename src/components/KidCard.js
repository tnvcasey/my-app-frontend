import React from "react"


function KidCard({kid, handleDeleteKid }){

    function deleteKid(){
        fetch(`http://localhost:9292/kids/${kid.id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => handleDeleteKid(kid))
    };

    const { img_src, name, age } = kid


    return(
        <li>
            <img src={img_src} width="400" height="400" />
            <h1>{kid.name} ({kid.age})</h1>
            <button className="secondary" onClick={deleteKid}>Delete</button>
            <button className="kid">Memories</button>
        </li>

    )

}



export default KidCard;