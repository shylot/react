import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/******************************************************************************************
 *
 * no.1 -> the oldest timer
 *
 ******************************************************************************************/
function timer() {
    const element = (
        <div>
            <h3>No.1 The Oldest Timer</h3>
            <h4>{new Date().toLocaleTimeString()}</h4>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('oldest_timer')
    )
}

setInterval(timer,1000)

/******************************************************************************************
 *
 * no.2 -> the simple function packed timer
 *
 ******************************************************************************************/

function Clock1(props) {
    return (
        <div>
            <h3>No.2 The Simple Function Packed Timer</h3>
            <h4>{props.date.toLocaleTimeString()}</h4>
        </div>
    );
}

function timer1() {
    ReactDOM.render(
        <Clock1 date={new Date()}/>,
        document.getElementById('simple_funciton_packed_timer')
    );
}

setInterval(timer1,1000);

/******************************************************************************************
 *
 * no.3 -> the simple class packed timer (convert the function to class)
 *
 ******************************************************************************************/

class Clock2 extends React.Component{
    render(){
        return (
            <div>
                <h3>No.3 The Simple Class Packed Timer</h3>
                <h4>{this.props.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

function timer2() {
    ReactDOM.render(
        <Clock2 date={new Date()}/>,
        document.getElementById('simple_class_packed_timer')
    );
}

setInterval(timer2,1000);

/******************************************************************************************
 *
 * no.4 -> class packed timer (use state)
 * this part the time WON`T change
 *
 ******************************************************************************************/

class Clock3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }
    render(){
        return (
            <div>
                <h3>No.4 The Class Packed Timer (State)</h3>
                <h4>{this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

function timer3() {
    ReactDOM.render(
        <Clock3/>,
        document.getElementById('class_packed_timer_state')
    );
}

setInterval(timer3,1000);

/******************************************************************************************
 *
 * no.5 -> class packed timer (use lifecycle to change time)
 *
 ******************************************************************************************/
class Clock4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.time(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    time(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div>
                <h3>No.5 The Class Packed Timer (Lifecycle)</h3>
                <h4>{this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock4/>,
    document.getElementById('class_packed_timer_lifecycle')
);
/******************************************************************************************
 *
 * no.5 -> isolated timer
 *
 ******************************************************************************************/
function App() {
    return (
        <div>
            <h2>ISOLATED TIMER</h2>
            <Clock4/>
            <Clock4/>
            <Clock4/>
        </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById('sum_isolated')
);
