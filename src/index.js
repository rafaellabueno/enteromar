import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "./views/Index.js";
import Home from "./views/Home.js";
import Sobre from "./views/Sobre.js";
import Jamira from "./views/Jamira.js";
import Projetos from "./views/Projetos.js";
import Design from "./views/Design.js";
import Publicacoes from "./views/Publicacoes.js";
import TesesDissertacoes from "./views/TesesDissertacoes.js";
import AlineTese from "./views/IndexSections/Teses/AlineTese";
import JaniraTese from "./views/IndexSections/Teses/JaniraTese";
import RebecaTese from "./views/IndexSections/Teses/RebecaTese";
import NaiaraTese from "./views/IndexSections/Teses/NaiaraTese";
import IcaroTese from "./views/IndexSections/Teses/IcaroTese";
import RomeuTese from "./views/IndexSections/Teses/RomeuTese";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route
                path="/home"
                exact
                render={props => <Home {...props} />}
            />
            <Route
                path="/sobre"
                exact
                render={props => <Sobre {...props} />}
            />
            <Route
                path="/jamira"
                exact
                render={props => <Jamira {...props} />}
            />
            <Route
                path="/publicacoes"
                exact
                render={props => <Publicacoes {...props} />}
            />
            <Route
                path="/projetos"
                exact
                render={props => <Projetos {...props} />}
            />
            <Route
                path="/teses-dissertacoes"
                exact
                render={props => <TesesDissertacoes {...props} />}
            />
            <Route
                path="/tese-aline"
                exact
                render={props => <AlineTese {...props} />}
            />
            <Route
                path="/tese-janira"
                exact
                render={props => <JaniraTese {...props} />}
            />
            <Route
                path="/tese-rebeca"
                exact
                render={props => <RebecaTese {...props} />}
            />
            <Route
                path="/tese-naiara"
                exact
                render={props => <NaiaraTese {...props} />}
            />
            <Route
                path="/tese-icaro"
                exact
                render={props => <IcaroTese {...props} />}
            />
            <Route
                path="/tese-romeu"
                exact
                render={props => <RomeuTese {...props} />}
            />
            <Route
                path="/design"
                exact
                render={props => <Design {...props} />}
            />
            <Redirect to="/home" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);


serviceWorker.unregister();
