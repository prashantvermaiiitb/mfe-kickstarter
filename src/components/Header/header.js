import React from 'react';
import './Header.css';
/**
 * Creating header component for the React Application
 * @param {*} msg 
 * @returns 
 */
const Header = ({ msg }) => {
    return (<div className='Header'>
        <h1>{msg || `Micro-Front-End Demo`}</h1>
    </div>);
}

export default Header;

