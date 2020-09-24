import React from 'react';
import classes from "./TitreH1.module.css";

/**
 *@author contact@avci-kadir.com
 */
const titreH1 = (props) => {
    const classesCss = `border border-dark bg-primary p-2 m-2 rounded text-white text-center ${classes.font_family}`
    return (
        <h1 className={classesCss}>{props.children}</h1>
    );
};

export default titreH1;