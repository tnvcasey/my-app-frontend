import React, { useEffect, useState} from "react"
import KidList from "./KidList"
import Home from "./Home"; 
import MemoryList from "./MemoryList";
import { Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar";
import NewKid from "./NewKid";
import NewMemory from "./NewMemory";
import KidDetails from "./KidDetails";

function App (){

    const [kids, setKids] = useState([])
    const [memories, setMemories] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/kids")
            .then(res => res.json())
            .then(kids => setKids(kids))
    }, [])

    function handleAddKid(newKid){
        const updatedKids = [...kids, newKid]
        setKids(updatedKids)
    }

    useEffect(() => {
        fetch("http://localhost:9292/memories")
            .then(res => res.json())
            .then(memories => setMemories(memories))
    }) 

    function handleAddMemory(newMemory){
        const updatedMemories = [...memories, newMemory]
        setMemories(updatedMemories)
    }


    return (
             <div className="app">
                 <NavBar />
                 <Switch>
                     <Route exact path='/'>
                         <Home />
                    </Route>
                    <Route exact path='/kids'>
                        <KidList kids={kids} />
                    </Route>
                    <Route exact path='/kids/new'>
                        <NewKid handleAddKid={handleAddKid}/>
                    </Route>
                    <Route exact path='/kids/:id'>
                        <KidDetails />
                    </Route>
                    <Route exact path='/memories'>
                        <MemoryList memories={memories}/>
                    </Route>
                    <Route exact path='/memories/new'>
                        <NewMemory handleAddMemory={handleAddMemory}/>
                    </Route>
                 </Switch>
             </div>
    )
}

export default App;