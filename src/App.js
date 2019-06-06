import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

class App extends Component {

  state = {
    cars: [
      {
        name: 'Ford',
        year: 2018,
        id: '1'
      },
      {
        name: 'Audi',
        year: 2016,
        id: '2'
      },
      {
        name: 'Mazda',
        year: 2006,
        id: '3'
      }
    ],
    pageTitle: 'React components',
    showCars: true
  };

  /*changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    });
  };*/

  deleteHandler(index) {
    const cars = this.state.cars.concat();

    cars.splice(index, 1);

    this.setState({cars});
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({cars});
  };

  renderCars = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  render() {
    const divStyle = {
      textAlign: 'center'
    };

    let cars = null;

    if(this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
            <Car
                name={car.name}
                year={car.year}
                key={car.id}
                /*onChangeTitle={this.changeTitleHandler.bind(this, car.name)}*/
                onDelete={this.deleteHandler.bind(this, index)}
                onChangeName={event => this.onChangeName(event.target.value, index)}
            />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1 style={{minHeight: 38}}>{this.state.pageTitle}</h1>

        <button onClick={this.renderCars}>Toggle cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
      </div>
    );
  }
}

export default App;
