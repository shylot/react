import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//function component
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

// ES6 class ==> component
class Welcome1 extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>
    }
}

//composing component
function App(){
    return (
        <div>
            <Welcome name='Shylot'/>
            <Welcome name='Erya'/>
            <Welcome name='Xu'/>
            <Welcome name='Qin'/>
        </div>
    );
}

ReactDOM.render(
    <Welcome name="JavaScript Function"/>,
    document.getElementById('function')
)

ReactDOM.render(
    <Welcome1 name="ES6 Class"/>,
    document.getElementById('es6')
)

ReactDOM.render(
    <App/>,
    document.getElementById('composing')
)
