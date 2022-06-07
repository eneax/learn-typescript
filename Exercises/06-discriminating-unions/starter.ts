/* eslint-disable @typescript-eslint/no-unused-vars */
interface MovingThing {
  speed: number;
}

// Add the necessary properties to allow for discriminating unions
interface Car extends MovingThing {
  wheels: number;
}
interface Boat extends MovingThing {
  drag: number;
}
interface Plane extends MovingThing {
  drag: number;
  engines: number;
}
interface Train extends MovingThing {
  cars: number;
  wheels: number;
}

type Vehicle = Car | Boat | Plane | Train;

// Without changing the parameter type, use discriminating unions
// to fix the type errors
function speed(vehicle: Vehicle) {
  console.log(vehicle.speed);
}
function wheelCount(vehicle: Vehicle) {
  console.log(vehicle.wheels);
}
function dragAmount(vehicle: Vehicle) {
  console.log(vehicle.drag);
}
function numberOfCars(vehicle: Vehicle) {
  console.log(vehicle.cars);
}
