import React, { useEffect, useState} from "react"
import Header from "./Header";
import KidList from "./KidList";
import MemoryList from "./MemoryList";

function App (){

    const [kids, setKids] = useState([])
    const [memories, setMemories] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:9292/memories")
            .then(res => res.json())
            .then(memories => setMemories(memories))
    }, [])

    useEffect(() => {
        fetch("http://localhost:9292/kids")
            .then(res => res.json())
            .then(kids => setKids(kids))
    }, [])

    function handleAddKid(newKid){
        const updatedKids= [...kids, newKid]
        setKids(updatedKids)
    }

    function handleAddMemory(newMemory){
        const updatedMemories = [...memories, newMemory]
        setMemories(updatedMemories)
    }

    function handleDeleteKid(deletedKid){
        const updatedKids= kids.filter((kid) => kid.id !== deletedKid)
        setKids(updatedKids)
    }

    function handleDeleteMemory(deletedMemory){
        const updatedMemories = memories.filter((memory) => memory.id !== deletedMemory)
        setMemories(updatedMemories)
    }



    return (
        <div className="app">
            <Header />
            <KidList kids={kids} handleAddKid={handleAddKid} handleDeleteKid={handleDeleteKid}/>
            <MemoryList memories={memories} handleAddMemory={handleAddMemory} handleDeletedMemory={handleDeleteMemory}/>
        </div>

    )
}

export default App;