import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";

function MemoryList(){

    const [memories, setMemories] = useState([])


    useEffect(() => {
        fetch("http://localhost:9292/memories")
            .then(res => res.json())
            .then(memories => setMemories(memories))
    }) 

    function handleAddMemory(newMemory){
        const updatedMemories = [...memories, newMemory]
        setMemories(updatedMemories)
    }
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