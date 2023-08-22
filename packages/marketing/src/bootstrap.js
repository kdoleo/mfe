import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Mount function to start up the app 
const mount = (el) =>  {
    ReactDOM.render(
       <App/>,
        el
    )
}

// if we are in development mode and in the browser in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// we are running thorugh container and export mount function 

export { mount }; 