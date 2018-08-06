import Fish from './Fish';

export default class Crucian extends Fish {
  constructor() {
    super();
    this.name = 'C';
  }

  incrementWeight() {
    if ((this.age % 3) === 0) {
      this.weight += 0.5;
    }
  }
}
