import Store from './store';
import Pike from './inhabitants/Pike';
import Crucian from './inhabitants/Crucian';
import Seaweed from './inhabitants/Seaweed';

export default class Tank {
  constructor(doc) {
    const canvass = doc.getElementById('canvas');
    this.canvas = canvass;
    this.context = canvass.getContext('2d');
    this.cellSize = 30;
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
  }

  DrawInhabitant(x, y, type) {
    const img = document.getElementById(type);
    this.context.drawImage(img, x, y, this.cellSize, this.cellSize);
  }

  DrawElem(elem) {
    this.DrawInhabitant((elem.coords.x * this.cellSize), (elem.coords.y * this.cellSize), elem.name);
  }

  removeElem(elem) {
    const index = this.map.indexOf(elem);
    this.map.splice(index, 1);
  }

  crucianStep(crucian) {
    crucian.swim();
    const seaweed = this.map.find((elem) => { // eslint-disable-line arrow-body-style
      return (elem.name === 'seaweed' &&
              elem.coords.x === crucian.coords.x &&
              elem.coords.y === crucian.coords.y);
    });
    if (seaweed) {
      this.removeElem(seaweed);
    }
  }

  pikeStep(pike) {
    pike.swim();
    const crucianHere = this.map.find((elem) => { // eslint-disable-line arrow-body-style
      return (elem.name === 'crucian' &&
              elem.coords.x === pike.coords.x &&
              elem.coords.y === pike.coords.y);
    });
    if (crucianHere) {
      pike.eatCrucian(crucianHere.weight);
      this.removeElem(crucianHere);
    }
    if (pike.weight <= 0) {
      this.removeElem(pike);
    }
  }

  canBeReproduced(elem, item) { // eslint-disable-line arrow-body-style, class-methods-use-this
    return (elem.name === item.name &&
             elem.age >= 3 &&
              item.age >= 3 &&
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

  run = setInterval(() => {
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
  }, Store.getters.interval);
}
