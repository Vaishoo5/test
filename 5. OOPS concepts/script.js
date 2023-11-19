
// Cohesion: Organizing related properties and methods into a class.

// Class representing a Car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.engine = new Engine();
    this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Method to start the car
  start() {
    this.engine.start();
  }

  // Method to stop the car
  stop() {
    this.engine.stop();
  }
}

// Class representing an Engine
class Engine {
  constructor() {
    this.isRunning = false;
  }

  // Method to start the engine
  start() {
    this.isRunning = true;
    console.log('Engine started');
  }

  // Method to stop the engine
  stop() {
    this.isRunning = false;
    console.log('Engine stopped');
  }
}

// Class representing a Wheel
class Wheel {
  constructor() {
    this.isInflated = true;
  }
  
  // Method to deflate the wheel
  deflate() {
    this.isInflated = false;
    console.log('Wheel deflated');
  }
  
  // Method to inflate the wheel
  inflate() {
    this.isInflated = true;
    console.log('Wheel inflated');
  }
}


// Example usage:

const myCar = new Car("Toyota", "Camry");
console.log(myCar);




