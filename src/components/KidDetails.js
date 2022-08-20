import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function KidDetails({ handleAddMemory, handleUpdatedKid }){

    const [kid, setKid] = useState([])
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [img_src, setImg_src] = useState("")
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/kids/${id}`)
            .then(res => res.json())
            .then(kid => {
                setKid(kid)
                setAge(kid.age)
                setName(kid.name)
                setImg_src(kid.img_src)
            })

    }, [])

    const [body, setBody] = useState("")
    const [date, setDate] = useState("")

    function handleSubmit(){
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

    function handleSubmitUpdate(){
        const newData = {
            img_src: img_src, 
            name: name, 
            age: age
        }
        fetch(`http://localhost:9292/kids/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newData),
        })
        .then((res) => res.json())
        .then((updatedKid) => handleUpdatedKid(updatedKid))
    }



        return(
            <div>
                <h1>{kid.name} ({kid.age}) </h1>
                <img src={kid.img_src} width="300" height="300"></img>
                <h3>
                    {kid.memories?.map((memory) => (
                        <div>
                            <li>*{memory.body}* Date:({memory.date})</li>
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
                <form onSubmit={handleSubmitUpdate}>
                    <h2>Edit {kid.name}</h2>
                    <label>Image URL:</label>
                    <input type="text" value={img_src} onChange={(e) => setImg_src(e.target.value)}/>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Age:</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
                    <button type="submit">Update Kid</button>
                </form>
            </div>
        )
    }

export default KidDetails; 