
import Store from '../store';

export default class Fish {
  static generateGender() {
    const theGender = ['male', 'female'];
    const randomNumber = Math.floor(Math.random() * theGender.length);
    return theGender[randomNumber];
  }

  static getNewCoord(value, direction) {
    let values = [];
    let direct = Store.getters.aquariumHeight;

    if (direction === 'y') {
      direct = Store.getters.aquariumWidth;
    }

    if (value === direct) {
      values = [value - 1, value];
    } else if (value === 0) {
      values = [value, value + 1];
    } else {
      values = [value - 1, value + 1];
    }
    const randomNumber = Math.floor(Math.random() * 2);
    return values[randomNumber];
  }

  static generateCoords(xCoord = false, yCoord = false) {
    const randomXCoord = Math.floor(Math.random() * Store.getters.aquariumHeight);
    const randomYCoord = Math.floor(Math.random() * Store.getters.aquariumWidth);
    let coords = {};
    if (xCoord === false && yCoord === false) {
      coords = { x: randomXCoord, y: randomYCoord };
    } else {
      coords = {
        x: Fish.getNewCoord(xCoord, 'x'),
        y: Fish.getNewCoord(xCoord, 'y'),
      };
    }
    return coords;
  }

  constructor() {
    this.age = 1;
    this.weight = 1;
    this.stepCount = 0;
    this.gender = Fish.generateGender();
    this.coords = Fish.generateCoords();
  }

  swim() {
    this.coords = {
      x: Fish.getNewCoord(this.coords.x, 'x'),
      y: Fish.getNewCoord(this.coords.y, 'y'),
    };
    this.stepCount += 1;
  }
}
