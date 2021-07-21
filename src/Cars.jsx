import { createContext } from "react";
import React from "react";
import { Component } from "react";
import Carrinhos from "./Carrinhos";

export const Context = createContext();

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
    this.moveCar = this.moveCar.bind(this);
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
  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    };

    return (
      <Context.Provider value={contextValue}>
        <Carrinhos />
      </Context.Provider>
    );
  }
}

export default Cars;
