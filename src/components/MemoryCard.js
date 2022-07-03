import React from "react";


function MemoryCard({ memory }){
    return(
        <div>
            <h2>{memory.body}</h2>
            <h4>{memory.date}</h4>
            <br />
            <button>Delete Memory</button>
        </div>
    )
}

export default MemoryCard; 