import React from 'react';
import InputComponent from './InputComponent';
class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showInputComponent: false,
      value1: '',
      value2: ''
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  handleToggleInputComponent = () => {
    this.setState(prevState => ({
      showInputComponent: !prevState.showInputComponent
    }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { counter } = nextState;
    return counter >= 0 && counter <= 5;
  }

  render() {
    const { counter, showInputComponent, value1, value2 } = this.state;

    return (
      <div>
        <input type="text" value={value1} onChange={e => this.setState({ value1: e.target.value })} /> {}
        <input type="text" value={value2} onChange={e => this.setState({ value2: e.target.value })} /> {}
        <button onClick={this.handleToggleInputComponent}>Toggle Input Component</button> {}
        {showInputComponent && <InputComponent value={`Value 1: ${value1}, Value 2: ${value2}`} />} {}
        <button onClick={this.handleIncrement}>+</button> {}
        <button onClick={this.handleDecrement}>-</button> {}
        <h2>Counter: {counter}</h2> {}
      </div>
    );
  }
}

export default CounterComponent;

