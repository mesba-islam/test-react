import React, { Component } from 'react';

class TestClass extends Component{
    constructor(props){
        super(props);
    
    this.state = {
        fruits:[
            {name: 'Mango', weight:'111gm'},
            {name: 'Grape', weight:'333gm'},
            {name: 'peach', weight:'222gm'},
        ]
        }
    }
    clickHandler = () => {
        this.setState({
            fruits:[
                {name: 'kongo', weight:'111gm'},
                {name: 'pongo', weight:'333gm'},
                {name: 'jongo', weight:'222gm'},
            ]
        })
        // console.log('hello i am here');
        // alert('welcome')
    }


    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>click me</button>
        <h4> Fruites name is {this.state.fruits[0].name} weight is {this.state.fruits[0].weight}</h4>
        <h4> Fruites name is {this.state.fruits[1].name} weight is {this.state.fruits[1].weight}</h4>
        <h4> Fruites name is {this.state.fruits[2].name} weight is {this.state.fruits[2].weight}</h4>
            </div>
        )
    }
}

export default TestClass