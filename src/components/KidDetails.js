import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom"

function KidDetails({ handleAddMemory }){

    const [kid, setKid] = useState([])

    const { id } = useParams(); 

    useEffect(() => {
        fetch(`http://localhost:9292/kids/${id}`)
            .then(res => res.json())
            .then(kid => setKid(kid))

    }, [])

    const [body, setBody] = useState("")
    const [date, setDate] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const memoryData = {
            body: body, 
            date: date, 
            kid_id: id
        }
        fetch(`http://localhost:9292/memories`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(memoryData), 
        })
            .then((res) => res.json())
            .then((newMemory) => {
                handleAddMemory(newMemory)

            })
    }




        return(
            <div>
                <h1>{kid.name} ({kid.age}) </h1>
                <img src={kid.img_src} width="300" height="300"></img>
                <h3>
                    {kid.memories?.map((memory) => (
                        <div>
                            <li>*{memory.body}* Date:({memory.date})*</li>
                            <button>Delete Memory</button>
                        </div>
                    ))}
                </h3>
                *********************************************************************************
                <h2>Add New Memory for {kid.name}</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Description:</label>
                            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                            <label>Date:</label>
                            <input type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
                            <button>Save Memory</button>
                        </form>
                **********************************************************************************

                <h2><NavLink to={`/kids/${kid.id}/edit`}>Edit Kid</NavLink></h2>
            </div>
        )
    }

export default KidDetails; 