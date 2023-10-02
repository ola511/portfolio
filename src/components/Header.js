import React from 'react';
import '../App.css';  // Adjust the path accordingly

const Header = () => {
    return (
        <header>
            <div className="text-center">
            <h1>Ola Al Jarrah</h1>
            </div>
            <div className="image-container">
                <img src="/OlaPic.jpg" alt="Profile of Ola" width="80" />
            </div>

        </header>
    );
}

export default Header;
