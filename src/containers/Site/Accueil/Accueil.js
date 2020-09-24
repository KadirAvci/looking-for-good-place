import React from 'react';
import TitreH1 from "../../../components/UI/Titre/TitreH1";
import Image from 'react-bootstrap/Image'
import imgAccueil from "../../../assets/images/chateau.jpg"

/**
 *@author contact@avci-kadir.com
 */
const accueil = (props) => {
    return (
        <>
            <TitreH1>Bienvenue sur le site GoodPlace</TitreH1>
            <p>Le site qui vous permet de trouver les établissement publics de l'ariège</p>
            <Image src={imgAccueil} fluid thumbnail style={{width:'100%'}}/>
        </>
    );
};

export default accueil;