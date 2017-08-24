import { Component, OnInit } from '@angular/core';

import { ElevatorDoor } from '../elevator-door';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss'],
  providers: [ElevatorDoor]
})
export class ElevatorComponent implements OnInit {
  door: ElevatorDoor;

  constructor(door: ElevatorDoor) {
    this.door = door;
  }

  ngOnInit() {
  }

  doorOpen() {
    // amke background color orange on the button that was pressed.
    // don't allow further action on this button, until the elevator arrives.
    // wait for elevator to arrive.
    //
    this.door.open();
  }

}
