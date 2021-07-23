
import { createContext } from "react";
import React from "react";
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';



export const Context = createContext();

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    
  }

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this)
  }

  moveCar(cor, valor) {
    this.setState({
      cars: {
        red: cor === "red" ? valor : this.state.cars.red,
        blue: cor === "blue" ? valor : this.state.cars.blue,
        yellow: cor === "yellow" ? valor : this.state.cars.yellow,
      },
    });
  }

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const contextValue = {
      cars: this.state.cars,
      signalColor: this.state.signal.color,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    return (
      <Context.Provider value={contextValue}>
        <Cars />
        <TrafficSignal />
      </Context.Provider>
    );
  }
}


export default App;

