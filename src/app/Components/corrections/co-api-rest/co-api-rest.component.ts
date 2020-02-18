import { Component, OnInit } from '@angular/core';
import { CoApiPhpService } from 'src/app/Services/corrections/CoApiPhp/co-api-php.service';
import { User } from 'src/app/Models/corrections/user';
import { Article } from 'src/app/Models/corrections/article';

@Component({
  selector: 'app-co-api-rest',
  templateUrl: './co-api-rest.component.html',
  styleUrls: ['./co-api-rest.component.scss']
})
export class CoApiRestComponent implements OnInit {

  private apiService:CoApiPhpService;
  public maListeUsers:User[] = [];
  public maListeArticle:Article[] = [];
  public infosUser:string;
  public userAdd:User = new User();
  public articleAdd:Article = new Article();


  constructor(coApiPhpService : CoApiPhpService) {
    this.apiService = coApiPhpService;
  }

  ngOnInit(): void {
    this.getListUser();
    this.getListArticles();
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

  private getListArticles():void{
    this.apiService.listerArticles().subscribe( (listArticle:Article[]) =>{
      // j'ai le retour de ma requête
      this.maListeArticle = listArticle;
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
  public onRemoveUser(user:User):void{
    this.apiService.removeUtilisateur(user.id).subscribe( (message:string) =>{
      this.infosUser = message;
      this.getListUser();
    });
  }

  /**
   * @name onChangeUser
   * @description Event déclanché sur le clique du bouton Chnage USer
   */
  public onChangeUser(user:User):void{
    this.apiService.changeUtilisateur(user).subscribe((message:string) =>{
      this.infosUser = message;
      this.getListUser();
    });
  }

  /**
   * @name onAddUser
   * @description Event déclanché sur le clique du bouton Add USer
   */
  public onAddUser():void{
    this.apiService.addUtilisateur(this.userAdd).subscribe( (message:string) =>{
      this.infosUser = message;
      this.getListUser();
    });
  }

  /**
   * @name onAddArticle
   * @description Event déclanché sur le clique du bouton Add Article
   */
  public onAddArticle():void{
    this.apiService.ajouterArticle(this.articleAdd).subscribe( (message:string) =>{
      this.infosUser = message;
      this.getListArticles();
    });
  }
}
