import React, { useState } from "react";


function NewKid({handleAddKid}){


    const [img_src, setImg_src] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const kidData = {
            img_src: img_src, 
            name: name, 
            age: age
        }
        fetch("http://localhost:9292/kids", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(kidData), 
        })
            .then((res) => res.json())
            .then((newKid) => {
                handleAddKid(newKid)

                setImg_src("")
                setName("")
                setAge("")
            })
        }

    return(
        <form onSubmit={handleSubmit}>
            <label>Picture</label>
            <input type="text" value={img_src} onChange={(e) => setImg_src(e.target.value)} />
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Age:</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <button type="submit">Add Kid</button>
        </form>
    )
}

export default NewKid; 