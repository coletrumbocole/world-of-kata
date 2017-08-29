import { Component, OnInit } from '@angular/core';
import { ElevatorDoor } from '../objects/elevator-door';
import { Elevator } from '../objects/elevator';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss'],
  providers: [ElevatorDoor, Elevator]
})
export class ElevatorComponent implements OnInit {
  floorNumber = 6;
  door: ElevatorDoor;
  elevator: Elevator;

  constructor(door: ElevatorDoor, elevator: Elevator) {
    this.door = door;
    this.elevator = elevator;
  }

  ngOnInit() {
  }

  callUp() {
    this.elevator.isCalled = true;
  }
  callDown() {
    this.elevator.isCalled = true;
  }
}
