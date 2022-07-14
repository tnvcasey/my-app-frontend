import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function EditKid(){

    const [kid, setKid] = useState({}); 
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [img_src, setImg_src] = useState("")
    const { id } = useParams();


    useEffect(async () => {
        const resp = await fetch(`http://localhost:9292/kids/${ id }`)
        const data = await resp.json();
        setKid(data)
        setName(data.name)
        setImg_src(data.img_src)
        setAge(data.age)
    }, [])

    const handleSubmit = async e => {
        e.preventDefault(); 
        const headers = {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
        const body = { name: name, age: age, img_src: img_src }
        const options = {
            method: "PATCH", 
            headers, 
            body: JSON.stringify(body)
        }
        await fetch(`http://localhost:9292/kids/${ id }`, options)
    }



    return(
        <form onSubmit={handleSubmit}>
            <h1>Edit {kid.name}</h1>
            <label>Image URL:</label>
            <input type="text" value={img_src} onChange={(e) => setImg_src(e.target.value)}/>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Age:</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <button type="submit">Update Kid</button>
        </form>
    )


}

export default EditKid;