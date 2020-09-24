import React from 'react';

/**
 *@author contact@avci-kadir.com
 */
const bouton = (props) => {
    const btnCSS = `btn ${props.btnType}`
    return (
        <button className={btnCSS}>{props.children}</button>
    );
};

export default bouton;