import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  // template: '<p>Bonjour</p>',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {

  public data = 'Bonjour';

  constructor() { }

  ngOnInit(): void {
  }

  doSth(dataSentByChildren: string) {
    this.data = dataSentByChildren;
  }

}
