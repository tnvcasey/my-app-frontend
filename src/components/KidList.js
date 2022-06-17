import { getNodeText } from "@testing-library/react";
import React from "react"
import KidCard from "./KidCard";

function KidList({kids, handleDeleteKid}) {

    return(
        <div>
            <h2 className="memoryHeader">Memories:</h2>
            <ul>
                {kids.map((kid) => (
                    <KidCard key={kid.id} kid={kid} handleDeleteKid={handleDeleteKid} />
                ))}
            </ul>
        </div>
    )



}

export default KidList; 