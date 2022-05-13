import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus: string;
  serverName: string = 'Test Server';
  servers = ['Test Server 1', 'Test Server 3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  createdServer = 0;
  ngOnInit(): void {}

  onCreateServer() {
    this.createdServer++;
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      this.createdServer +
      ' Server(s) were created.   ' +
      'The Name of new server is ' +
      this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
