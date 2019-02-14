import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

function LabeledSlider(props) {
  const labelStyle = {
    display: 'inline-block',
    width: '50px',
    textAlign: 'left'
  };

  return (
    <div>
      <div style={labelStyle}>{props.label}:</div>
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={event => props.valueChange(event.target.value)}
      />
      <span>{props.value}</span>
    </div>
  );
}

LabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  valueChange: PropTypes.func.isRequired
};

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = { red: 0, green: 0, blue: 0 };
  }

  render() {
    const colorBoxStyle = {
      width: '100px',
      height: '100px',
      border: '1px solid black',
      background: `rgb(${this.state.red},${this.state.green},${
        this.state.blue
      })`
    };

    return (
      <div>
        <div id="color" style={colorBoxStyle} />
        <LabeledSlider
          label="Red"
          value={this.state.red}
          valueChange={value => {
            this.setState({ red: value });
          }}
        />
        <LabeledSlider
          label="Green"
          value={this.state.green}
          valueChange={value => {
            this.setState({ green: value });
          }}
        />
        <LabeledSlider
          label="Blue"
          value={this.state.blue}
          valueChange={value => {
            this.setState({ blue: value });
          }}
        />
      </div>
    );
  }
}

export { ColorPicker };

function App() {
  return <ColorPicker />;
}

export default App;
