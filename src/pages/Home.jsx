import React from "react";

export default function Home(){

    return(
        <div id = "secondBody">
            <div className = "middleCollumn">
                <h1>JooJ</h1>
                <Contador/>
            </div>
        </div>
    )
}

class Contador extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    minus(estado){
        let number = estado.number
        this.setState({number: number -= 1});
    }

    plus(estado){
        let number = estado.number
        this.setState({number: number += 1});
    }

    render(){
        return(
            <div>
                <button className = "menos" onClick = {() => this.minus(this.state)}>-</button>
                <div className = "contador">{this.state.number}</div>
                <button className = "mais" onClick = {() => this.plus(this.state)}>+</button>
            </div>
        );
    }
}