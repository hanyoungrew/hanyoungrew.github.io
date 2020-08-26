import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import AboutMe from "./AboutMe.jsx"



function Routing() {

    return (
        <Switch>                
            <Route exact path="/" component={AboutMe}/>
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

export default Routing;
