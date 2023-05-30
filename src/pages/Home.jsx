import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import fullLogo from "../images/full_logo.png"

function Home() {
    return (
        <div className='homeInfo'>
            <div className='home-form'>
            
                <h2 className='home-elem'>Welcome to Kinoteatron !!!</h2>

                <img src={fullLogo} alt="full_logo" width={400} height={300} className='home-elem' />

                <h3 className='home-elem'><br/>Kinoteatron - your best choice for buying tickets for the most anticipated movies! Our website is a reliable and convenient online resource to help you secure access to the latest blockbusters, exclusive premieres and festivals.</h3>

                <h2 className='home-elem'><br/>Better buy tickets while they are available
                    <br/>
                    <Link to="/all_movies"> BUY!</Link>
                </h2>

            </div>
            
        </div>
    );
}

export default Home;

