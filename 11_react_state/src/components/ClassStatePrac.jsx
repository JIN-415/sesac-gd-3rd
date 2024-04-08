import { Component } from 'react';

export default class ClassStatePrac extends Component {
  state = {
    num: 0,
  };
  render() {
    const { num } = this.state;
    return (
      <>
        <div>{num}</div>
        <button
          onClick={() => {
            let copy = num;
            this.setState({ num: copy + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            let copy = num;
            this.setState({ num: copy - 1 });
          }}
        >
          -1
        </button>
      </>
    );
  }
}
