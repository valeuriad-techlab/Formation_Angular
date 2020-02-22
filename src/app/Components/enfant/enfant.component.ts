import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() public receviedData = 'ABC';

  @Output('fireEvent') reload = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(data) {
    this.receviedData = data;
    this.reload.emit(this.receviedData);
  }

}
