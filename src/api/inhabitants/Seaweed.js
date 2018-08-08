import Coordinator from '../Coordinator';

export default class Seaweed {
  constructor() {
    this.name = 'seaweed';
    this.weight = 1;
    this.coords = Coordinator.generateCoords();
  }
}
