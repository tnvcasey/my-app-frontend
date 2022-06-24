import React from "react";
import MemoryCard from "./MemoryCard";

function MemoryList({ memories }){
    return(
        <div>
            <h1>MemoryList</h1>
            <ul>
                {memories.map((memory) => (
                    <MemoryCard memory={memory} key={memory.id} />
                ))}
            </ul>
        </div>
    )
}

export default MemoryList; 