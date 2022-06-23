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

    function handleAddPost(newPost){
        const updatedKids= [...kids, newPost]
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
            <NewMemory handleAddPost={handleAddPost}/>
            <h1></h1>
            <KidList kids={kids}  handleDeleteKid={handleDeleteKid}/>
        </div>

    )
}

export default App;