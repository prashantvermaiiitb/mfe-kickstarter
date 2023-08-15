import React from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/Header/header';
import Application1 from './src/components/Application1/Application1';
import Application2 from './src/components/Application2/Application2';

/**
 * Container APP having both Header and paragraph component.
 * @returns 
 */
const AppContainer = () => {
    return (
        <>
            <Header />
            <Application1 />
            <Application2 />
        </>
    )
}

ReactDOM.render(<AppContainer/>,document.getElementById('app'));