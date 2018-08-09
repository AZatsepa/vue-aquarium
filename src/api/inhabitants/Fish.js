
import Coordinator from '../Coordinator';

export default class Fish {
  static generateGender() {
    const theGender = ['male', 'female'];
    const randomNumber = Math.floor(Math.random() * theGender.length);
    return theGender[randomNumber];
  }

  constructor(coords) {
    this.weight = 1;
    this.reproduced = false;
    this.stepCount = 0;
    this.gender = Fish.generateGender();
    if (coords) {
      this.coords = Object.assign({}, coords);
    } else {
      this.coords = Coordinator.generateCoords();
    }
  }

  swim() {
    const coords = {
      x: Coordinator.getNewCoord(this.coords.x, 'x'),
      y: Coordinator.getNewCoord(this.coords.y, 'y'),
    };
    this.coords = coords;
    this.stepCount += 1;
    this.reproduced = false;
    this.changeWeight();
  }

  disableReproducing() {
    this.reproduced = true;
  }

  eat(food) {
    this.weight += food.weight;
  }

  changeWeight() {
    this.weight -= 0.1;
  }
}
