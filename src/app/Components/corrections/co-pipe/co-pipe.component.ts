import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-pipe',
  templateUrl: './co-pipe.component.html',
  styleUrls: ['./co-pipe.component.scss']
})
export class CoPipeComponent implements OnInit {

  constructor() { }

  text: string = "Bonjour je m'apppelle Julien ! Je t'appelle depuis Julien ville !";

  ngOnInit(): void {
  }

}
