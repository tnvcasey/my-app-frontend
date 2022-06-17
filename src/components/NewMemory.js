import React from "react"

function NewMemory(){

    return (
        <form>
            <input type="text" name="name" placeholder="Kid's Name" />
            <input type="text" name="body" placeholder="Memory Description" />
            <input type="text" name="date" placeholder="Date" />
            <button>Add New Memory</button>
        </form>
    )

}

export default NewMemory; 