import React from 'react';

/**
 * Creating Paragraph component from react 
 * @param {*} msg 
 * @returns 
 */
const Paragraph = ({ msg }) => {
    return (<p>{msg || `Become champion in Micro-Front end`}</p>);
}

export default Paragraph;