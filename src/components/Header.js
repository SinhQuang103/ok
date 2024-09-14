import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="header">
            <div className="logo">Logo</div>
            <div className="searchbar">
                <input className="searchbox" type="text" placeholder="Search..." />
                <div className="startsearch">Search</div>
            </div>
            <div className="cart">Cart</div>
            <div className="login-button" onClick={handleLoginClick}>Login</div>
        </div>
    );
};

export default Header;
