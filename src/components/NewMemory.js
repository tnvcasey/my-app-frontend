import React, { useState } from "react"

function NewMemory(){

    const [name, setName] = useState("")
    const [body, setBody] = useState("")
    const [date, setDate] = useState("")



    return (
        <form>
            <input type="text" name="name" placeholder="Kid's Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" name="body" placeholder="Memory Description" value={body} onChange={(e) => setBody(e.target.value)} />
            <input type="text" name="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button>Add New Memory</button>
        </form>
    )

}

export default NewMemory; 