import React, {Component} from 'react';
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Site from './containers/Site/Site';
import "bootstrap/dist/css/bootstrap.min.css";

/**
 *@author contact@avci-kadir.com
 */
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Site/>
            </BrowserRouter>
        );
    }
}

export default App;