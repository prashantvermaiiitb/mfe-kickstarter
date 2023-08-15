import React from 'react';
import './Header.scss';
import './Header.css';
// this will return URN of our logo image and this will be used in any of 
// our src tag on img.
import logo from '../../assets/images/webpack-logo.png'
/**
 * Creating header component for the React Application
 * @param {*} msg 
 * @returns 
 */
const Header = ({ msg }) => {
    return (<div className='Header'>
        <img src={logo}/>
        <h1>{msg || `Welcome to Micro-Front-End Demo`}</h1>
    </div>);
}

export default Header;

