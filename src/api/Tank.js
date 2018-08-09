import Store from '../store';
import Pike from './inhabitants/Pike';
import Crucian from './inhabitants/Crucian';
import Seaweed from './inhabitants/Seaweed';

const oneCell = (elem1, elem2) => elem1.coords.x === elem2.coords.x && elem1.coords.y === elem2.coords.y;

export default class Tank {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.map = [];
  }

  fillTank() {
    for (let i = 0; i < Store.state.pikesNumber; i += 1) {
      this.map.push(new Pike());
    }

    for (let i = 0; i < Store.state.cruciansNumber; i += 1) {
      this.map.push(new Crucian());
    }

    for (let i = 0; i < Store.state.seaweedsNumber; i += 1) {
      this.map.push(new Seaweed());
    }

    for (let i = 0; i < this.map.length; i += 1) {
      this.DrawElem(this.map[i]);
    }
  }

  DrawInhabitant(x, y, type) {
    const img = document.getElementById(`${type}2`);
    this.context.drawImage(img, x, y, Store.state.cellSize, Store.state.cellSize);
  }

  DrawElem(elem) {
    const xCoord = (elem.coords.x - 1) * Store.state.cellSize;
    const yCoord = ((Store.state.aquariumHeight - elem.coords.y) * Store.state.cellSize);
    this.DrawInhabitant(xCoord, yCoord, elem.name);
  }

  removeElem(elem) {
    const index = this.map.indexOf(elem);
    this.map.splice(index, 1);
  }

  crucianStep(crucian) {
    this.map.forEach((elem) => {
      if ((elem.name === 'seaweed' && oneCell(crucian, elem))) {
        crucian.eat(elem);
        this.removeElem(elem);
      }
    });
    crucian.swim();
  }

  pikeStep(pike) {
    const crucian = this.map.find((elem) => { // eslint-disable-line arrow-body-style
      return (elem.name === 'crucian' && oneCell(pike, elem));
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
                oneCell(elem, item));
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
    for (let i = 0; i < (Store.state.aquariumWidth + 1) * Store.state.cellSize; i += Store.state.cellSize) {
      this.context.beginPath();
      this.context.moveTo(i, 0);
      this.context.lineTo(i, (Store.state.aquariumHeight + 1) * Store.state.cellSize);
      this.context.stroke();
    }
    // Draw horizontal lines
    for (let i = 0; i < (Store.state.aquariumHeight + 1) * Store.state.cellSize; i += Store.state.cellSize) {
      this.context.beginPath();
      this.context.moveTo(0, i);
      this.context.lineTo((Store.state.aquariumWidth + 1) * Store.state.cellSize, i);
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
    }, Store.state.interval);
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
