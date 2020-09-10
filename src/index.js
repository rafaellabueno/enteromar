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

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Index {...props} />} />
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
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);


serviceWorker.unregister();
