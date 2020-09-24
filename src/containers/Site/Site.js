import React, {Component} from 'react';
import Accueil from './Accueil/Accueil';
import Localisation from "./Localisation/Localisation";
import Contact from "./Contact/Contact";
import NavBar from "../../components/UI/NavBar/NavBar";
import {Route} from "react-router-dom";

/**
 *@author contact@avci-kadir.com
 */
class Site extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Route path={"/accueil"} exact render={()=><Accueil/>}/>
                <Route path={"/localisation"} exact component={()=> <Localisation/>}/>
                <Route path={"/contact"} exact render={() => <Contact/>}/>
            </div>
        );
    }
}

export default Site;