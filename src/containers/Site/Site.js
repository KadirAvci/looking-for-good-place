import React, {Component} from 'react';
import Accueil from './Accueil/Accueil';
import Localisation from "./Localisation/Localisation";
import Contact from "./Contact/Contact";
import NavBar from "../../components/UI/NavBar/NavBar";
import {Route, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container"
import Erreur404 from "../../components/UI/Erreur/Erreur404/Erreur404";
import Footer from "../../components/Footer/Footer";

/**
 *@author contact@avci-kadir.com
 */
class Site extends Component {
    render() {
        return (
            <>
                <div className={"site"}>
                    <NavBar/>
                    <Container>
                        <Switch>
                            <Route path={"/"} exact render={()=><Accueil/>}/>
                            <Route path={"/localisation"} component={()=><Localisation/>}/>
                            <Route path={"/contact"} render={(props)=><Contact {...props}/>}/>
                            <Route render={()=><Erreur404/>}/>
                        </Switch>
                    </Container>
                    <div className={"minSite"}></div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Site;