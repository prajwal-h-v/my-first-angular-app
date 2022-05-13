import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-assg',
  templateUrl: './dir-assg.component.html',
  styleUrls: ['./dir-assg.component.css'],
})
export class DirAssgComponent implements OnInit {
  isHidden: boolean = false;
  log = [];
  constructor() {}

  onHide() {
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      this.log.push('Hidden at :' + new Date().toUTCString());
    } else {
      this.log.push('Displayed at :' + new Date().toUTCString());
    }
  }

  ngOnInit(): void {}
}
