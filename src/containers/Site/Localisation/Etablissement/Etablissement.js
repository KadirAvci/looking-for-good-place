import React from 'react';
import Card from "react-bootstrap/Card";
import Horraires from "../Horaires/Horaires";

const etablissement = (props) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Header>{props.nom}</Card.Header>
            <Card.Body>
                <Card.Title>
                    Telephone : {props.telephone}<br/>
                </Card.Title>
                <Card.Text>
                    {props.mail && `Mail: ${props.mail}`}<br/>
                    <strong>Adresse : </strong><br/>
                    {props.adresses[0].lignes[0]}
                    {props.adresses[0].codePostal} - {props.adresses[0].commune}
                    <br/>
                    <strong>Horaire : </strong><br/>
                    {props.horaires && <Horraires horaires = {props.horaires}/>}
                    <br/>
                    {props.url && <a href={props.url} className={"btn btn-info"} target={"_blank"}>Visiter le site web </a>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default etablissement;