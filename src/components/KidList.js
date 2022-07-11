import KidCard from "./KidCard";

function KidList({kids, handleDelete}) {



    return(
        <div>
            <h2 className="kids">My Kids</h2>
            <ul className="cards">
                {kids.map((kid) => (
                    <KidCard key={kid.id} kid={kid} handleDelete={handleDelete}/>
                ))}
            </ul>
        </div>
    )



}

export default KidList; 