import Store from '../store';
import Pike from './inhabitants/Pike';
import Crucian from './inhabitants/Crucian';
import Seaweed from './inhabitants/Seaweed';

export default class Tank {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.map = [];
  }

  fillTank() {
    for (let i = 0; i < Store.getters.pikesNumber; i += 1) {
      this.map.push(new Pike());
    }

    for (let i = 0; i < Store.getters.cruciansNumber; i += 1) {
      this.map.push(new Crucian());
    }

    for (let i = 0; i < Store.getters.seaweedsNumber; i += 1) {
      this.map.push(new Seaweed());
    }

    for (let i = 0; i < this.map.length; i += 1) {
      this.DrawElem(this.map[i]);
    }
  }

  DrawInhabitant(x, y, type) {
    const img = document.getElementById(`${type}2`);
    this.context.drawImage(img, x, y, Store.getters.cellSize, Store.getters.cellSize);
  }

  DrawElem(elem) {
    const xCoord = (elem.coords.x - 1) * Store.getters.cellSize;
    const yCoord = ((Store.getters.aquariumHeight - elem.coords.y) * Store.getters.cellSize);
    this.DrawInhabitant(xCoord, yCoord, elem.name);
  }

  removeElem(elem) {
    const index = this.map.indexOf(elem);
    this.map.splice(index, 1);
  }

  crucianStep(crucian) {
    this.map.forEach((elem) => {
      if ((elem.name === 'seaweed' &&
            elem.coords.x === crucian.coords.x &&
              elem.coords.y === crucian.coords.y)) {
        crucian.eat(elem);
        this.removeElem(elem);
      }
    });
    crucian.swim();
  }

  pikeStep(pike) {
    const crucian = this.map.find((elem) => { // eslint-disable-line arrow-body-style
      return (elem.name === 'crucian' &&
              elem.coords.x === pike.coords.x &&
              elem.coords.y === pike.coords.y);
    });
    if (crucian) {
      pike.eat(crucian);
      this.removeElem(crucian);
    }
    pike.swim();
    if (pike.weight <= 0) {
      this.removeElem(pike);
    }
  }

  canBeReproduced(elem, item) { // eslint-disable-line arrow-body-style, class-methods-use-this
    return (elem.name === item.name &&
             elem.stepCount >= 3 &&
              item.stepCount >= 3 &&
               elem.gender !== item.gender &&
                elem.coords.x === item.coords.x &&
                 elem.coords.y === item.coords.y);
  }

  reproduction() {
    this.map.forEach((item) => {
      if (item.name !== 'seaweed') {
        const canReproduce = this.map.find((elem) => { // eslint-disable-line arrow-body-style
          return this.canBeReproduced(elem, item);
        });
        if (canReproduce && item.name === 'crucian') {
          this.map.push(new Crucian());
        } else if (canReproduce && item.name === 'pike') {
          this.map.push(new Pike());
        }
      }
    });
  }

  cruciansCount() {
    return this.map.filter(elem => elem.name === 'crucian').length;
  }

  pikesCount() {
    return this.map.filter(elem => elem.name === 'pike').length;
  }

  drawGrid() {
    // Draw vertical lines
    for (let i = 0; i < (Store.getters.aquariumWidth + 1) * Store.getters.cellSize; i += Store.getters.cellSize) {
      this.context.beginPath();
      this.context.moveTo(i, 0);
      this.context.lineTo(i, (Store.getters.aquariumHeight + 1) * Store.getters.cellSize);
      this.context.stroke();
    }
    // Draw horizontal lines
    for (let i = 0; i < (Store.getters.aquariumHeight + 1) * Store.getters.cellSize; i += Store.getters.cellSize) {
      this.context.beginPath();
      this.context.moveTo(0, i);
      this.context.lineTo((Store.getters.aquariumWidth + 1) * Store.getters.cellSize, i);
      this.context.stroke();
    }
  }

  run() {
    this.step = setInterval(() => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.reproduction();
      this.map.forEach((item) => {
        this.DrawElem(item);
        switch (item.name) {
          case 'crucian':
            this.crucianStep(item);
            break;
          case 'pike':
            this.pikeStep(item);
            break;
          default:
        }
      });
      this.map.push(new Seaweed());
      if (this.cruciansCount() === 0 || this.cruciansCount() > 50) {
        this.stop();
        Store.commit('stopGame');
      }
    }, Store.getters.interval);
  }

  drawText(text) {
    this.context.font = '30px Arial';
    this.context.fillStyle = 'red';
    this.context.textAlign = 'center';
    this.context.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
  }

  stop() {
    clearInterval(this.step);
    this.step = null;
    this.map = [];
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawText('Game Over!');
    setTimeout(() => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }, 300);
  }
}
