import React from "react";
import {Link} from "react-router-dom";
import { Film } from "./film";
import mib from "../images/mib.jpeg";
import ant_man from "../images/ant_man.jpg";
import ghost from "../images/ghost.jpg";
import mummies from "../images/mummies.jpeg";
import shazam from "../images/shazam.jpg";

class AllFilms extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            this.createMovies()
        );
    }

    createMovies() {
        const movieNames = [mib, ant_man, mummies, ghost, shazam]
        const moviesList = [
            new Film(0, "Men in black", "Action comedy film", 120, "mib.jpeg"), 
            new Film(1, "Ant-Man and the Wasp: Quantumania", "Superhero film", 120, "ant_man.jpg"), 
            new Film(2, "Mummies", "Comedy", 140, "mummies.jpg"),
            new Film(3, "We Have a Ghost", "Fantasy", 140, "ghost.jpg"),
            new Film(4, "Men in Shazam! Fury of the Gods", "Action/Fantasy", 120, "shazam.jpg")
        ];
        
        const movies = moviesList.map(film => 
            <li key={film.id} className="movie">
                <img src={movieNames[film.id]} alt={film.image} width={300} height={400}></img><br />
                Name: {film.name}<br /> 
                Type: {film.type}<br />
                Time: {film.time} min <br />

                <Link to="/order_tickets" className="buy-ref">Buy tickets!</Link>

                <br />
                <br />
            </li>
        );
        
        return <ul className="block-films">{movies}</ul>;
    }
}

export default AllFilms;