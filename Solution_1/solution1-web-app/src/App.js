import React, { Component } from "react"
import "./App.css"
import { connect } from "react-redux"
import { increaseCounter, decreaseCounter } from "./redux/Counter/counter.actions"


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "black", "orange"],
      rendered_color: ""
    }

    this.changeColor = this.changeColor.bind(this);
    this.selectColor = this.selectColor.bind(this);
  }

  changeColor(){
    this.selectColor();
  }

  selectColor(){
    let colors = this.state.colors;
    let rendered_color = this.state.rendered_color;
    let render_color = colors[Math.floor(Math.random() * colors.length)];
    if(rendered_color === "blue"){
      render_color = "green"
    } 

    this.setState({
      rendered_color: render_color
    })
  }

  componentDidMount(){
    this.selectColor();
  }

  render(){

    let {rendered_color} = this.state;

    return(
      <div>
        <button 
          onClick={this.changeColor} 
          style={{backgroundColor: rendered_color, 
            cursor: "pointer",
            height: "50px",
            width: "200px",
            color: "white"
          }}
        >
          Click to change the color
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)