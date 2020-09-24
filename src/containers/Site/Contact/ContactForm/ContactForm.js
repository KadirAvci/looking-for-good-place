import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const contactForm = (props) => {
    return (
        <div>
            <Form>
                <Form.Group controlId={"nom"}>
                    <Form.Label>Nom</Form.Label><Badge variant={"warning"}>(min 5 caractères)</Badge>
                    <Form.Control type={"text"} placeholder={"Votre nom"}/>
                </Form.Group>
                <Form.Group controlId={"mail"}>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type={"email"} placeholder={"Votre email"}/>
                </Form.Group>
                <Form.Group controlId={"message"}>
                    <Form.Label>Votre Message</Form.Label><Badge variant={"warning"}>(entre 100 et 200 caractères)</Badge>
                    <Form.Control as={"textarea"} rows={"3"}/>
                </Form.Group>
                <Button variant={"primary"} type={"submit"}>
                    Valider
                </Button>
            </Form>
        </div>
    );
};

export default contactForm;