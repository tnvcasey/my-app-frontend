import React, { useState } from "react"

function NewMemory({handleAddPost}){

    const [name, setName] = useState("")
    const [body, setBody] = useState("")
    const [date, setDate] = useState("")

    function handleSubmit(e){
        e.preventDefault(); 
        const kidData={
            name: name, 
            body: body, 
            date: date,
        }
        fetch("http://localhost:9292/kids", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(kidData), 
        })
            .then((res) => res.json())
            .then((newPost) => {
                handleAddPost(newPost)

                setName("")
                setBody("")
                setDate("")
            })
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Kid's Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" name="body" placeholder="Memory Description" value={body} onChange={(e) => setBody(e.target.value)} />
            <input type="text" name="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button>Add New Memory</button>
        </form>
    )

}

export default NewMemory; 