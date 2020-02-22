import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.scss']
})
export class BienvenueComponent implements OnInit {
  
  public liste = [
    {
      name: 'Farine',
      qty: '250',
      quantifier: 'g'
    },
    {
      name: 'Lait',
      qty: '0.5',
      quantifier: 'L'
    },
    {
      name: 'Oeuf',
      qty: '4',
    },
    {
      name: 'Beurre fondu',
      qty: '50',
      quantifier: 'g'
    },
    {
      name: 'Abricots',
      qty: '20',
    },
    {
      name: 'Sel',
      qty: '1',
      quantifier: 'pincée'
    },
  ];

  quillData: any;

  formulaire: FormGroup;

  // @ViewChild("monForm") monForm: ElementRef;
  // @ViewChild("titre") titre: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.formulaire = new FormGroup({
      'courriel': new FormControl(null, Validators.required),
      'couleur': new FormControl(null),
      'ingredient': new FormControl(null),
    });
  }

  onSubmit(form) {
    console.log('form', form);
  }
  onSubmit2() {
    console.log('form', this.formulaire);
  }

  // log() {
  //   console.log('monForm', this.monForm);
  //   console.log('titre', this.titre);
  // }

}
