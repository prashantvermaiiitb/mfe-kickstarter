import React from 'react';

/**
 * Importing the federated module from the Application1
 * We have to mention the name of the applciation that we are importing which is Application1
 * followed by the component that we are looking for i.e. federated module
 */
const Home = React.lazy(() => import('Application1/Home'))

/**
 * Creating Application1 component from react 
 * @param {*} msg 
 * @returns 
 * return (<p>{msg || `Placeholder for Application1`}</p>);
 */
const Application1 = ({ msg }) => {
    return (
        <React.Suspense fallback={'Loading application -1 '}>
            <Home />
        </React.Suspense>
    )
}
export default Application1;