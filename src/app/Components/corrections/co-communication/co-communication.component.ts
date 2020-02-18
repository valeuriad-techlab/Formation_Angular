import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-co-communication',
  templateUrl: './co-communication.component.html',
  styleUrls: ['./co-communication.component.scss']
})
export class CoCommunicationComponent implements OnInit {

  @Input()
  roleConteneurParent:string;
    
  data:string;

  @Output()
  send:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.data = "Bof";
  }

  onEventData():void{
    this.send.emit(this.data);
  }


}
