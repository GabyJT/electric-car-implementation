U54107257
// Car class with speed and make.
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
// Method to accelerate the car.
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h`);
  }
// Method to brake the car.
  brake() {
    this.speed -= 5;
    console.log(`${this.make} slowed down to ${this.speed} km/h`);
  }
}

// Create EV class extending Car with additional charge property.
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
}
// Implement chargeBattery method in EV class.
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
// Method to charge the battery to a specified level.
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} charged to ${this.charge}%`);
  }
}
// Override accelerate method in EV class to adjust speed and charge.
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
// Override accelerate method for EVs that increases speed and reduces charge.
  accelerate() {
    super.accelerate();
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  }
}
// Testing the EV class.
const tesla = new EV('Tesla', 120, 23);

// Test EV class methods with different operations.
tesla.accelerate(); // This will adjust speed and charge.
tesla.brake();
tesla.chargeBattery(50);
