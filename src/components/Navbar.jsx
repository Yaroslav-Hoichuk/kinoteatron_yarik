import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom"
import '../css/menu.css'
import '../css/styles.css'
import BigLogo from "./BigLogo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <>
            <div className="navbar-line">
                <BigLogo />

                <input 
                    type="checkbox" 
                    name="checkbox-menu" 
                    id="check-menu"
                />
                <label for="check-menu">
                    <FontAwesomeIcon icon={faAlignJustify} id='activate-menu'/>
                    <FontAwesomeIcon icon={faTimes} id="cancel-menu"/>
                </label>

                <nav className="sidebar">
                    <header>
                        Kinoteatron
                    </header>
                    <ul>
                        <li>
                            <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
                        </li>
                        <li>
                            <Link to="/login"><FontAwesomeIcon icon={faUser}/> Log in</Link>
                        </li>
                        <li>
                            <Link to="/all_movies"><FontAwesomeIcon icon={faTicketAlt}/> Order tickets</Link>
                        </li>
                        <li>
                            <Link to="/login"><FontAwesomeIcon icon={faFilm}/> Soon in theaters</Link>
                        </li>
                        <li>
                            <Link to="/contact_us"><FontAwesomeIcon icon={faPhone}/> Contact us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;