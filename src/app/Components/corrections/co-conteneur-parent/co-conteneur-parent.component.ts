import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-conteneur-parent',
  templateUrl: './co-conteneur-parent.component.html',
  styleUrls: ['./co-conteneur-parent.component.scss']
})
export class CoConteneurParentComponent implements OnInit {

  role: string = "Je suis le maitre";
  nbHisto: number = 0;
  retourInfo: string;
  historique: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @name onEventCommunication
   * @description Event déclenché lors de la reception d'unedonnée envoyé par notre nenfant
   * @param data la données en question. Ici un string
   */
  onEventCommunication(data: string): void {
    this.retourInfo = data;
  }

  /**
   * @name onEventChangeInput
   * @description Event déclanché lors du changement d'état de notre input parent
   * @param data la données de l'input parent
   */
  onEventChangeInput(data: string) {
    this.role = data;
    this.historique.push(data);
    this.nbHisto = this.historique.length;
  }

}
