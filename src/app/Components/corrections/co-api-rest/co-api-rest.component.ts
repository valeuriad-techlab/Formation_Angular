import { Component, OnInit } from '@angular/core';
import { CoApiPhpService } from 'src/app/Services/corrections/CoApiPhp/co-api-php.service';
import { User } from 'src/app/Models/corrections/user';

@Component({
  selector: 'app-co-api-rest',
  templateUrl: './co-api-rest.component.html',
  styleUrls: ['./co-api-rest.component.scss']
})
export class CoApiRestComponent implements OnInit {

  private apiService:CoApiPhpService;
  public maListeUsers:User[] = [];
  public infosUser:string;
  public userAdd:User = new User();


  constructor(coApiPhpService : CoApiPhpService) {
    this.apiService = coApiPhpService;
  }

  ngOnInit(): void {
    this.getListUser();
  }

  /**
   * @name getListUser
   * @description Permet de récupérer la liste des utilisateurs
   */
  private getListUser():void{
    this.apiService.listerUtilisateur().subscribe( (listUser:User[]) =>{
      // j'ai le retour de ma requête
      this.maListeUsers = listUser;
    });
  }

  /**
   * @name onReloadUser
   * @description Event déclanché sur le clique du bouton Relaod
   */
  public onReloadUser():void{
    this.getListUser();
  }

  /**
   * @name onRemoveUser
   * @description Event déclanché sur le clique du bouton Remove
   */
  public onRemoveUser():void{
    this.apiService.removeUtilisateur().subscribe( (message:string) =>{
      this.infosUser = message;
    });
  }

  /**
   * @name onChangeUser
   * @description Event déclanché sur le clique du bouton Chnage USer
   */
  public onChangeUser():void{
    this.apiService.changeUtilisateur().subscribe((message:string) =>{
      this.infosUser = message;
    });
  }

  /**
   * @name onAddUser
   * @description Event déclanché sur le clique du bouton Add USer
   */
  public onAddUser():void{
    this.apiService.addUtilisateur(this.userAdd).subscribe( (message:string) =>{
      this.infosUser = message;
    });
  }
}
