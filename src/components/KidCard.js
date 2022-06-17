import React from "react"


function KidCard({kid, handleDeleteKid }){

    function deleteKid(){
        fetch(`http://localhost:9292/kids/${kid.id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => handleDeleteKid(kid))
    };


    return(
        <div>
            <h2>{kid.name} ({kid.age})</h2>
            <ul>
                {kid.memories.map((memory) => (
                    <li>{memory.body} {memory.date}</li>
                ))}
            </ul>
            <button onClick={deleteKid}>delete</button>
        </div>

    )

}



export default KidCard;