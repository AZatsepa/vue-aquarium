import Fish from './Fish';

export default class Pike extends Fish {
  constructor() {
    super();
    this.name = 'pike';
    this.weight = 1;
  }

  changeWeight() {
    this.weight -= 0.1;
  }

  eatCrucian(value) {
    this.weight += value;
  }
}
