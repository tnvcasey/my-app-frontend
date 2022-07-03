import React, { useEffect, useState} from "react"
import KidList from "./KidList"
import Home from "./Home"; 
import MemoryList from "./MemoryList";
import { Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar";
import NewKid from "./NewKid"
import KidDetails from "./KidDetails";
import NewMemory from "./NewMemory";

function App (){



    return (
             <div className="app">
                 <NavBar />
                 <Switch>
                     <Route exact path='/'>
                         <Home />
                    </Route>
                    <Route exact path='/kids'>
                        <KidList />
                    </Route>
                    <Route exact path='/kids/new'>
                        <NewKid />
                    </Route>
                    <Route exact path='/kids/:id'>
                        <KidDetails />
                    </Route>
                    <Route exact path='/kids/:kidId/memories/new'>
                        <NewMemory />
                    </Route>
                    <Route exact path='/memories'>
                        <MemoryList />
                    </Route>
                 </Switch>
             </div>
    )
}

export default App;