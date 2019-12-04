import React, { Component } from 'react';

const style = {
  width: '900px',
  height: 'auto',
  padding: '10px',
  margin: '20px 0',
};

export default class index extends Component {
  render() {
    return (
      <div style={style}>
        <h1> {this.props.header} </h1>
        <p> {this.props.description}</p>
        <div style={this.props.customStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
