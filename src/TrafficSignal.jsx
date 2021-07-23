// src/TrafficSignal.jsx
import { Context } from './App'
import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalCol) => {
  if (signalCol === 'red') {
    return redSignal;
  }
  if (signalCol === 'green') {
    return greenSignal;
  }
  if (signalCol === 'yellow') {
    return yellowSignal;
  }
  return null;
};


class TrafficSignal extends React.Component {
  render() {
  return (
    <Context.Consumer>
    {({ signalColor, changeSignal }) => (
    <div>
      <div className="button-container">
        <button className="btn" onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button className="btn" onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button  className="btn" onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      { <img className="signal" src={renderSignal(signalColor)} alt="" /> }
    </div>
  )}


      </Context.Consumer>
    );
  }
}

export default TrafficSignal;
