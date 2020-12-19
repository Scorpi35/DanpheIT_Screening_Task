import React, { Component } from "react"

import "./App.css"

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"


class App extends Component{
  render(){
    return(
      <div>
        <button>Click Here</button>
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