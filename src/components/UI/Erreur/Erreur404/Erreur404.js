import React from 'react';
import TitreH1 from "../../Titre/TitreH1";

const erreur404 = (props) => {
    return (
        <div>
            <TitreH1>Erreur 404</TitreH1>
            <p>La page que vous rechercher n'existe pas</p>
        </div>
    );
};

export default erreur404;