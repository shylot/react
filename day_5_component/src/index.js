import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';


/******************************************************************************************
 *
 * component
 *
 ******************************************************************************************/

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

/******************************************************************************************
 *
 * simple composing component
 *
 ******************************************************************************************/

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

/******************************************************************************************
 *
 * how to composing
 *
 ******************************************************************************************/

//*********************************** before composing ***********************************
function BeforeComposing(props){
    return (
        <div className='comment'>
            <div className='userInfo'>
                <img className='Avatar'
                     src={props.author.avatarURL}
                     alt={"/"+props.author.name}
                />
                <div className='userInfor_name'>
                     {props.author.name}
                </div>
            </div>
            <div className='comment_text'>
                 {props.text}
            </div>
            <div className='comment_data'>
                 {props.date}
            </div>
        </div>
    );
}

//*********************************** after composing ***********************************
function Avatar(props){
    return (
        <img
             src={props.user.avatarURL}
             alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className='UserInfo'>
            <Avatar user={props.user}/>
            <div className='UserInfo-name'>
                 {props.user.name}
            </div>
        </div>
    );

}

function AfterComposing(props){
    return (
        <div className='comment'>
            <UserInfo user={props.author}/>
            <div className='comment_text'>
                 {props.text}
            </div>
            <div className='comment_data'>
                 {props.date}
            </div>
        </div>
    );
}


/******************************************************************************************
 *
 * ReactDOM render()
 *
 ******************************************************************************************/

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

const user = {
    name:"Shylot·Xu",
    avatarURL: logo
};

const user1 = {
    name: "Shylot·Xu",
    avatarURL: logo
};

ReactDOM.render(


    <BeforeComposing
        text="this is comment text"
        date={new Date().toLocaleTimeString()}
        author={user}
    />,
    document.getElementById('berfore_composing')
)

ReactDOM.render(
    <AfterComposing
        text="this is comment text"
        date={new Date().toLocaleTimeString()}
        author={user1}
    />,
    document.getElementById('after_composing')
)


