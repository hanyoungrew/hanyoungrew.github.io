import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home.jsx"
import AboutMe from "./AboutMe.jsx"



function Routing() {

    return (
        <Switch>                
            <Route exact path="/" component={Home}/>
            <Route exact path="/aboutme" component={AboutMe}/>
            <Route exact path="/Emanuel_Rew_Resume.pdf"/>
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

export default Routing;
