import NewCharacter from './NewCharacter';

export default class Daemon extends NewCharacter {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defense = 40;
  }
}