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
                <img src={kid.img_src} width="400" height="300"></img>
                <h2>
                    {kid.memories?.map((memory) => (
                        <li>{memory.body}</li>
                    ))}
                </h2>

            </div>
        )
    }

export default KidDetails; 