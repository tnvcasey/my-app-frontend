import React, { useEffect, useState} from "react"
import Header from "./Header";
import KidList from "./KidList";
import MemoryList from "./MemoryList";

function App (){

    const [memories, setMemories] = useState([])
    const [kids, setKids] = useState([])


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
    


    return (
        <div className="app">
            <Header />
            <KidList />
            <MemoryList />
        </div>

    )
}

export default App;