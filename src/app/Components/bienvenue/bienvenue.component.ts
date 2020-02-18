import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.scss']
})
export class BienvenueComponent implements OnInit {


  liste = [{
    nom : "test4",
    poids : "100gr",
  },{
    nom : "test1",
    poids : "100gr",
  },
  {
    nom : "test2",
    poids : "160gr",
  },
  {
    nom : "test2",
    poids : "140gr",
  },
  {
    nom : "test3",
    poids : "170gr",
  }];


  constructor() { }

  ngOnInit(): void {
  }

}
