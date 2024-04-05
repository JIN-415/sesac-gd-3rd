import React, { Component } from 'react';

export default class ClassPropsPrac extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <p>{text}</p>
        <button
          type='button'
          onClick={() => {
            console.log({ valid });
          }}
        >
          BTN
        </button>
      </div>
    );
  }

  static defaultProps = {
    text: '이건 기본 text props입니다.',
  };
}
