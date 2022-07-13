import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function EditKid(){

    const [kid, setKid] = useState(); 
    const [img_src, setImg_src] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const { id } = useParams();
    const history = useHistory(); 

    useEffect(() => {
        fetch(`http://localhost:9292/kids/${id}`)
            .then((res) => res.json())
            .then((kid) => setKid(kid))

    }, [])


    return(
        <form>
            <h1>Edit {kid.name}</h1>
            <label>Picture</label>
            <input type="text"  />
            <label>Name:</label>
            <input type="text" />
            <label>Age:</label>
            <input type="text"/>
            <button type="submit">Update Kid</button>
        </form>
    )


}

export default EditKid;