import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind-assg',
  templateUrl: './data-bind-assg.component.html',
  styleUrls: ['./data-bind-assg.component.css'],
})
export class DataBindAssgComponent implements OnInit {
  userName: String = 'Prajwal';
  ifNameEmpty = false;
  constructor() {}

  ngOnInit(): void {}

  onNameEntered(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName.length == 0) {
      this.ifNameEmpty = true;
    } else {
      this.ifNameEmpty = false;
    }
  }

  onSubmit() {
    this.userName = '';
    this.ifNameEmpty = true;
  }
}
