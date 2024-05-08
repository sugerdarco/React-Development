/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

const element = (
    <a href="https://random.org" target='_blank'>Visit Random.org</a>
);

//react custome react
const anotherElement = "Tea"
const reactElement = React.createElement(
    'a',    //type
    { href: "https://random.org", target: '_blank' }, //props
    'click me to visit Randon.org', //TextNode or innerHTML
    anotherElement  //evaluated javascript attribute
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <>
    //     <Chai />
    //     <App />
    // </>
    reactElement
)
