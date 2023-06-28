import React from 'react';

class InputComponent extends React.Component {
  render() {
    const { value } = this.props;
    return <h2>{value}</h2>;
  }
}

export default InputComponent;
