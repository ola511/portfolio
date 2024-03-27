import React from 'react';
import '../App.css'; // Adjust the path accordingly
import OlaPic from './imgs/OlaPic.jpg';

const Header = () => {
    return (
        <header>
            <div className="text-center">
                <h1>Ola Al Jarrah</h1>
            </div>
            <div className="image-container">
                <img
                   src={OlaPic}
                    alt="Profile of Ola"
                    className="rounded-image"
                />
            </div>
        </header>
    );
};

export default Header;
