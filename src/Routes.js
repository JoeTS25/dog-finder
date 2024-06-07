import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function Routes() {
    return(
    <Switch>
        <Route path ="/dogs"><DogList dogs={dogs} /></Route>
        <Route path="/dogs/:name"><DogDetails dogs={dogs} /></Route>
        <Redirect to="/dogs" />
    </Switch>
    );
}

export default Routes;