import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function KidDetails(){

    const [kid, setKid] = useState(null)
    const { id } = useParams(); 

    useEffect(() => {
        fetch(`http://localhost:9292/kids/${id}`)
            .then(res => res.json())
            .then(kid => setKid(kid))
    }, [])

        return(
            <h1>
                <p>Kid Details</p>

            </h1>
        )
    }

export default KidDetails; 