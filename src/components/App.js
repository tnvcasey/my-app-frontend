import React, { useEffect, useState} from "react"
import Header from "./Header";
import KidList from "./KidList";
import NewMemory from "./NewMemory";

function App (){

const [kids, setKids] = useState([])                                       
    

    useEffect(() => {
        fetch("http://localhost:9292/kids")
            .then(res => res.json())
            .then(kids => setKids(kids))
    }, [])

    function handleAddKid(newKid){
        const updatedKids= [...kids, newKid]
        setKids(updatedKids)
    }


    function handleDeleteKid(deletedKid){
        const updatedKids= kids.filter((kid) => kid.id !== deletedKid)
        setKids(updatedKids)
    }



    return (
        <div className="app">
            <Header />
            <h1></h1>
            <NewMemory />
            <h1></h1>
            <KidList kids={kids} handleAddKid={handleAddKid} handleDeleteKid={handleDeleteKid}/>
        </div>

    )
}

export default App;