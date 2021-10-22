import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    // this.state ={count:0}で直接変更やっちゃだめ。setStateを使う
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusBurron = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusBurron}>-1</button>
      </>
    );
  }
}

export default App;
