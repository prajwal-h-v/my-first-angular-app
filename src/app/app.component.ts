import {
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, DoCheck {
  title: 'My First App';

  constructor() {
    // console.log('App Component Constructing...');
  }
  serverElements = [];

  ngOnChanges(changes: SimpleChanges) {
    // console.log('App changes ' + changes);
  }
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  ngDoCheck(): void {
    // console.log('app do check');
  }
  onBlueprintAdded(blueprintDetail: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintDetail.serverName,
      content: blueprintDetail.serverContent,
    });
  }
  ngOnInit(): void {
    console.log('App component intialised...');
  }

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
