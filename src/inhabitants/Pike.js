import Fish from './Fish';

export default class Pike extends Fish {
  constructor() {
    super();
    this.name = 'P';
    this.weight = 3;
  }

  decrementWeight() {
    this.weight -= 0.5;
  }

  eatCrucian() {
    this.weight += 1;
  }
}
