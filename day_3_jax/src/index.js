import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';


//传入变量
class Variable extends React.Component{
    render(){
        const name = 'Variable';
            return (
                <h2 className='variable'><label>{name} is FUN</label></h2>
        );
    }
}

//传入函数
class Function extends React.Component{

    formatName(user){
        return 'Function ' +user.firstName + "\n" + user.lastName;
    }

    render(){
        const user = {
            firstName: 'Shylot',
            lastName: 'Xu'
        }

        return (
            <span className='function'>
                {this.formatName(user)}
            </span>
        );
    }
}

class Attribute extends React.Component{
    render(){
        return (
            <div className='attribute'>
                <img src={logo}></img>

                <div>
                    <a href='www.baidu.com' tabIndex='0'>百度</a><br/>
                    <a href='www.google.com' tabIndex='1'>谷歌</a><br/>
                    <a href='www.github.com' tabIndex='2'>谷歌</a><br/>
                </div>
            </div>
        );
    }
}

class Container extends React.Component{

    render(){
        return (
            <div>
                <Variable/>
                <Function/>
                <Attribute/>
            </div>
        );
    }
}

ReactDOM.render(

    <Container />,
    document.getElementById('root')
);
