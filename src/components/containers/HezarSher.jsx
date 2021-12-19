import React from 'react';

import MainLayout from '../Layouts/MainLayout';

import { Route, Switch } from "react-router-dom";
import LandingPage from './../landingPage/LandingPage';
import Fortune from '../Poetry/Fortune';
import Poets from './../Poetry/Poets';
import Poet from './../Poetry/Poet';
import RandomPoem from './../Poetry/RandomPoem';

const HezarSher = (porps) => {
    return (
        <MainLayout>
            <Switch>
                <Route exact path="/fortune" component={Fortune} />
                <Route exact path="/random" component={RandomPoem} />
                <Route exact path="/poets" component={Poets} />
                <Route exact path="/poet/:id" component={Poet} />
                <Route exact path="/" component={LandingPage} />
            </Switch>
        </MainLayout>
    );
}

export default HezarSher;