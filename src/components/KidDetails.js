import React, { useState, useEffect } from "react";
import { useParams, NavLink  } from "react-router-dom"

function KidDetails(){

    const [kid, setKid] = useState([])

    const { id } = useParams(); 

    useEffect(() => {
        fetch(`http://localhost:9292/kids/${id}`)
            .then(res => res.json())
            .then(kid => setKid(kid))

    }, [])

        return(
            <div>
                <h1>{kid.name} ({kid.age})</h1>
                <img src={kid.img_src} width="400" height="400"></img>
                <h2>
                    {kid.memories?.map((memory) => (
                        <li>{memory.body} *Date:({memory.date})*</li>
                    ))}
                </h2>
                <NavLink to={`/kids/${ kid.id }/memories/new`}>Add a New Memory</NavLink>
            </div>
        )
    }

export default KidDetails; 