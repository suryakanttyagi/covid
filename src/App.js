import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './layout/Header.js';
import WorldCasesScreen from './layout/WorldCasesScreen.js';
import ErrorBoundary from "./layout/ErrorBoundary.js";
import './css/layout.css';
import IndiaCasesScreen from './layout/IndiaCasesScreen.js';

class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <Router>
                    <div className="row mx-0">
                        <div className="col-md-3 col-lg-2 col-xl-2 card-body shadow p-0">
                            <Header></Header>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-10 col-xl-10">
                            <Switch>
                                <Route path="/india-covid-details">
                                    <IndiaCasesScreen></IndiaCasesScreen>
                                </Route>
                                <Route path="/world-covid-details">
                                    <WorldCasesScreen></WorldCasesScreen>
                                </Route>
                                <Route path="/">
                                    <WorldCasesScreen></WorldCasesScreen>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </ErrorBoundary>
        );
    }
}
export default App