export class ElevatorDoor {
  isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  toString() {
    return this.isOpen ? "open" : "shut";
  }

}
