import React, { Component } from "react";
import { Context } from "./Cars";
import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import carYellow from "./images/carYellow.jpeg";

class Carrinhos extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ cars, moveCar }) => (
          <div>
            <div>
              <div>
                <img
                  className={cars.red ? "car-right" : "car-left"}
                  src={carRed}
                  alt="red car"
                />
                <button onClick={() => moveCar("red", !cars.red)} type="button">
                  Move
                </button>
              </div>
              <div>
                <img
                  className={cars.blue ? "car-right" : "car-left"}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => moveCar("blue", !cars.blue)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={cars.yellow ? "car-right" : "car-left"}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => moveCar("yellow", !cars.yellow)}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default Carrinhos;
