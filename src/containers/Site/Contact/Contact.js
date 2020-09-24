import React, {Component} from 'react';
import Titre from "../../../components/UI/Titre/TitreH1";
import Button from "react-bootstrap/Button";
import {LinkContainer} from "react-router-bootstrap";
import {Route} from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";

/**
 *@author contact@avci-kadir.com
 */
class Contact extends Component {
    render() {
        return (
            <>
                <Titre>Contactez-nous !</Titre>
                <div>
                    <h2>Adresse: </h2>
                    xxxxxx
                    <h2>Téléphone: </h2>
                    xxxxxx
                </div>
                <h2>Vous préférez nous écrire ?</h2>
                <LinkContainer to={this.props.match.path+"/form"}>
                    <Button variant={"primary"}>Formulaire de contact</Button>
                </LinkContainer>
                <Route path={this.props.match.path + "/form"} render={(props) => <ContactForm/>}/>
            </>
        );
    }
}

export default Contact;