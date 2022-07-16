import React, { useEffect, useState} from "react"
import KidList from "./KidList"
import { Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar";
import NewKid from "./NewKid"
import KidDetails from "./KidDetails";
import EditKid from "./EditKid";

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
    
    function handleDelete(deletedKid){
        const updatedKids = kids.filter((kid) => kid.id !== deletedKid.id)
        setKids(updatedKids)
    }

    function handleUpdatedKid(updatedKidObj){
        const updatedKids = kids.map((kid) => {
            if(kid.id === updatedKidObj.id) {
                return updatedKidObj;
            } else {
                return kid
            }
        });
        setKids(updatedKids)
    }

    useEffect(() => {
        fetch("http://localhost:9292/memories")
            .then((res) => res.json())
            .then((memories) => setMemories(memories))
    }, [])

    function handleAddMemory(newMemory){
        const updatedMemories = [...memories, newMemory]
        setMemories(updatedMemories)
    }





    return (
             <div className="app">
                 <NavBar />
                 <Switch>
                    <Route exact path='/kids'>
                        <KidList kids={kids} handleDelete={handleDelete}/>
                    </Route>
                    <Route exact path='/kids/new'>
                        <NewKid handleAddKid={handleAddKid}/>
                    </Route>
                    <Route exact path='/kids/:id'>
                        <KidDetails handleAddMemory={handleAddMemory}/>
                    </Route>
                    <Route exact path='/kids/:id/edit'>
                        <EditKid handleUpdatedKid={handleUpdatedKid}/>
                    </Route>
                 </Switch>
             </div>
    )
}

export default App;

