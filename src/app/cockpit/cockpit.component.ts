import {
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit, OnChanges, DoCheck {
  newServerName: string;
  newServerContent: string;

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
    // console.log('Cockpit Component Constructing...');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('Cockpit changes ', changes);
  }

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  ngOnInit(): void {
    // console.log('Cockpit component intialised...');
  }

  ngDoCheck(): void {
    // console.log('cockpit do check');
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(serverNameInput);
    // console.log(this.serverContentInput);

    this.newServerName = serverNameInput.value;
    this.newServerContent = this.serverContentInput.nativeElement.value;
    // console.log(this.newServerName, this.newServerContent);

    if (this.newServerName == '' || this.newServerContent == '') {
      console.log('Empty fields ');
      alert('Cannot have empty fields');
    } else {
      console.log(this.newServerName + ' ' + this.newServerContent);
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      });
    }
  }
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.newServerName = serverNameInput.value;
    this.newServerContent = this.serverContentInput.nativeElement.value;
    if (this.newServerName == '' || this.newServerContent == '') {
      alert('Cannot have empty fields');
    } else {
      this.blueprintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      });
    }
  }
}
