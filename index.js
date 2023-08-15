import React from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/Header/header';
import Paragraph from './src/components/Paragraph/paragraph';

/**
 * Container APP having both Header and paragraph component.
 * @returns 
 */
const AppContainer = () => {
    return (
        <>
            <Header />
            <Paragraph />
        </>
    )
}

ReactDOM.render(<AppContainer/>,document.getElementById('app'));