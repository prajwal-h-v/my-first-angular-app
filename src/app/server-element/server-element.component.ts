import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit
{
  @ContentChild('contentParagraph') contentPraragraphBlock: ElementRef;
  constructor() {
    // console.log('Server Element Component Constructing...');
  }
  ngAfterContentInit(): void {
    console.log(this.contentPraragraphBlock);
  }

  @Input('srvElement') element: { type: string; name: string; content: string };

  ngOnChanges(changes: SimpleChanges) {
    // console.log('server elemetn changes ', changes);
  }
  ngDoCheck(): void {
    // console.log('server element do check');
  }
  ngOnInit(): void {
    // console.log('Server Element component intialised...');
  }
}
