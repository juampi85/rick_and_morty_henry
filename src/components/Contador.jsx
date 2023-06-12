import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    // const addFunction = () => {
    //   this.setState({ count: this.state.count + 1 })
    // };

    // const lessFunction = () => {
    //   this.state.count > 0 && this.setState({ count: this.state.count - 1 });
    // };

    return (
      <div>
        <h1>The count is: {this.state.count}!</h1>
        {/* <button onClick={lessFunction}>-</button> */}
        <button
          onClick={() => {
            this.state.count > 0 &&
              this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
        <hr></hr>
        {/* <button onClick={addFunction} >+</button> */}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default Contador;
