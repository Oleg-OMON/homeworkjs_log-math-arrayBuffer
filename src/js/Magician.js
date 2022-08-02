import NewCharacter from './NewCharacter';

export default class Magician extends NewCharacter {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 100;
    this.defense = 40;
  }
}
