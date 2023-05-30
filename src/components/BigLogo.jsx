import React from "react";
import big_logo from '../images/kinoteatron_big_logo.png'
import '../css/styles.css'

function BigLogo() {
    return (
        <img 
            src={big_logo}
            alt="here is logo" 
            width="100px" 
            height="100px" 
            className="big-logo"
        />
    );
}

export default BigLogo;