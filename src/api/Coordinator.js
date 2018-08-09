import Store from '../store';

export default class Coordinator {
  static getNewCoord(value, direction) {
    let values = [];
    let maxValue = Store.state.aquariumWidth;

    if (direction === 'y') {
      maxValue = Store.state.aquariumHeight;
    }

    if (value === maxValue) {
      values = [value - 1, value];
    } else if (value === 0) {
      values = [0, value + 1];
    } else {
      values = [value - 1, value + 1];
    }
    const randomNumber = Math.floor(Math.random() * 2);
    let val = values[randomNumber];
    if ((direction === 'y' && val === 0) || (direction === 'x' && val === 1)) {
      val += 1;
    }
    return val;
  }

  static generateCoords() {
    const randomXCoord = Math.floor(Math.random() * (Store.state.aquariumWidth + 1));
    const randomYCoord = Math.floor(Math.random() * (Store.state.aquariumHeight + 1));
    const coords = {
      x: randomXCoord,
      y: randomYCoord,
    };
    return coords;
  }
}
