import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


const index = () => {

    return (
        <>
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </>
    );
}

export default index