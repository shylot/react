import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 小块正方形

function Square(props){
    return (
        <button className='square' onClick={props.click}>
            {props.value}
        </button>
    );
}

// 容器
class Board extends React.Component{

    renderSquare(i) {
        {/*第一：设置子组件props*/}
        return (
            <Square
                value={this.props.squares[i]}
                click={()=>this.props.onClick(i)}
            />
        );
    }

    render() {

        return (
            <div>
                {/*<div className="status">{status}</div>*/}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// 整个游戏面板
class Game extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            history: [{squares: Array(9).fill(null)}],
            xIsNext: true,
            stepNumber:0,
        };
    }


    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = Winner(current.squares);


        const move = history.map((step,move)=>{
            alert("step:"+JSON.stringify(step) +"\nmove："+move);
           const desc = move ? 'go to move #' + move : 'go to game start';
           return (
               <li key={move}>
                   <button onClick={()=>this.jumpTo(move)}>{desc}</button>
               </li>
           );
        });


        let status;
        if(winner){
            status = "Winner: " + winner;
        }else{
            status = "Next Player: " + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i)=>this.handleClick(i)}
                    >
                    </Board>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{move}</ol>
                </div>

            </div>
        );
    }

    handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if(Winner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext? 'X' : 'O';
        this.setState({
            history: history.concat([{squares:squares}]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0,
        });
    }
}

function Winner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
}

// 将游戏面板绑定HTML的DOM节点
ReactDOM.render(
    <Game/>,
    document.getElementById("root")
)
