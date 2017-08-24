import { Injectable } from '@angular/core';

@Injectable()
export class ElevatorDoor implements Injectable {
  doorSign = "shut";

  open() {
    this.doorSign = "open";
  }

  toString() {
    let str = "It\'s " + this.doorSign;
    return str;
  }
}
