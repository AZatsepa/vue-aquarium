import Fish from './Fish';

export default class Pike extends Fish {
  constructor() {
    super();
    this.name = 'pike';
    this.weight = 5;
  }

  changeWeight() {
    this.weight -= 0.5;
  }

  eatCrucian(value) {
    this.weight += value;
  }
}
