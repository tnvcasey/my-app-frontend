import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function KidDetails(){

    const [kid, setKid] = useState([])

    const { id } = useParams(); 

    useEffect(() => {
        fetch(`http://localhost:9292/kids/${id}`)
            .then(res => res.json())
            .then(kid => setKid(kid))

    }, [])

     //const mems = kid.memories.map((memory) => (<li key={memory.id}>{memory}</li>)
        return(
            <div>
                <h1>{kid.name} ({kid.age})</h1>
                <img src={kid.img_src} width="400" height="400"></img>
                <h2>
                    {kid.memories?.map((memory) => (
                        <li>{memory.body} *Date:({memory.date})*</li>
                    ))}
                </h2>
                <h3>Add New Memory</h3>
                <form>
                    <input type="text" placeholder="Description of Memory"/>
                    <input type="text" placeholder="Date"/>
                    <button>Submit Memory</button>
                </form>

            </div>
        )
    }

export default KidDetails; 