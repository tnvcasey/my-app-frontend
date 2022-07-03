import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 


function NewMemory(){

    const [kid, setKid] = useState([])
    const { kidId } = useParams()
    
    return(
        <div>
            <h3>Add New Memory</h3>
                <form>
                    <label>Description of Memory:</label>
                    <input type="text"/>
                    <br />
                    <label>Date of Memory:</label>
                    <input type="text"/>
                    <br />
                    <button>Submit Memory</button>
                </form>
        </div>
    )
}

export default NewMemory;