import React, { useEffect, useState} from "react"
import KidList from "./KidList"
import Home from "./Home"; 
import MemoryList from "./MemoryList";
import { Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar";
import NewKid from "./NewKid";
import NewMemory from "./NewMemory";
import KidDetails from "./KidDetails";

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
                    <Route exact path='/memories/new'>
                        <NewMemory />
                    </Route>
                 </Switch>
             </div>
    )
}

export default App;