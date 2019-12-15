import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import TeamlabstoreService from "./services/teamlabstore-service";
import {TeamlabstoreServiceProvider} from "./components/store-service-context";

import store from "./store";

import App from "./App";

const teamlabstoreService = new TeamlabstoreService();

ReactDOM.render(
    <Provider store={store}>
        <TeamlabstoreServiceProvider value={teamlabstoreService}>
            <Router>
                <App />
            </Router>
        </TeamlabstoreServiceProvider>
    </Provider>,
    document.getElementById("root"));