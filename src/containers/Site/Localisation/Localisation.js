import React, {Component} from 'react';
import axios from "axios";
import TitreH1 from "../../../components/UI/Titre/TitreH1";
import {Button, Row, Col} from "react-bootstrap";
import Etablissement from"../Localisation/Etablissement/Etablissement";

/**
 *@author contact@avci-kadir.com
 */
class Localisation extends Component {
    state = {
        recherche: null
    }

    rechercheEtablissement= (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/23/${type}`)
            .then(response=>{
                this.setState({recherche: response.data.features })
            })
    }

    render() {
        return (
            <>
                <TitreH1>Rechercher un établissement</TitreH1>
                <Button variant={"secondary"} onClick={() => this.rechercheEtablissement("mairie")}>Mairie</Button>
                <Button variant={"secondary"} onClick={() => this.rechercheEtablissement("commissariat_police")}>Commisariat de police</Button>
                <Button variant={"secondary"} onClick={() => this.rechercheEtablissement("pole_emploi")}>Pôle Emploi</Button>
                <Button variant={"secondary"} onClick={() => this.rechercheEtablissement("prefecture")}>Préfecture</Button>
                <Row>
                    {
                        this.state.recherche && this.state.recherche.map(etablissement => {
                            return (
                                <Col md={6} key={etablissement.properties.id}>
                                    <Etablissement
                                        adresses =      {etablissement.properties.adresses}
                                        horaires =      {etablissement.properties.horaires}
                                        id =            {etablissement.properties.id}
                                        nom =           {etablissement.properties.nom}
                                        telephone =     {etablissement.properties.telephone}
                                        mail =          {etablissement.properties.email}
                                        url =           {etablissement.properties.url}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </>
        );
    }
}

export default Localisation;