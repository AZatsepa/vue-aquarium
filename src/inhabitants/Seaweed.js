import Store from '../store';

export default class Seaweed {
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

  static generateCoords() {
    const randomXCoord = Math.floor(Math.random() * Store.getters.aquariumHeight);
    const randomYCoord = Math.floor(Math.random() * Store.getters.aquariumWidth);
    const coords = {
      x: Seaweed.getNewCoord(randomXCoord, 'x'),
      y: Seaweed.getNewCoord(randomYCoord, 'y'),
    };
    return coords;
  }

  constructor() {
    this.name = 'seaweed';
    this.weight = 1;
    this.coords = Seaweed.generateCoords();
  }
}
