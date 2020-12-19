import React, { Component } from "react"
import "./App.css"
import { connect } from "react-redux"
import { storeColor } from "./redux/Counter/actions"

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

    this.props.storeColor(render_color);
  }

  componentDidMount(){
    this.selectColor();
  }

  render(){

    let {rendered_color} = this.state;
    let {colors_order} = this.props;

    return(
      <div className="container">

        <div className="button_text_container">

          <div className="button_container">
            <button 
              onClick={this.changeColor} 
              className="btn"
              style={{backgroundColor: rendered_color}}
            >
              Click to change the color
            </button>
          </div>

          <div className="text_container">
            {
              colors_order.map((color, i) => {
                return(
                  <div style={{color: color, float: "left"}}>
                    {color},
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    colors_order: state.counter.colors_order,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeColor: (color) => dispatch(storeColor(color))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)