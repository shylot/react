import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function timer(){
    const element = (
        <div>
            <h1>Hello World, Hello Erya！</h1>
            <h2>Time: {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
    ReactDOM.render(element,document.getElementById('root'));
}

setInterval(timer,1000);
