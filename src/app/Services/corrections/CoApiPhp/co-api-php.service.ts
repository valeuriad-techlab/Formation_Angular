import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from 'src/app/Models/corrections/user';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Article } from 'src/app/Models/corrections/article';

@Injectable({
  providedIn: 'root'
})
export class CoApiPhpService {
  

  private listUser:string = environment.listUser;
  private listArticles:string = environment.listArticles;
  private addUser:string = environment.addUser;
  private addArticle:string = environment.addArticle;
  private removeUser:string = environment.removeUser;
  private changeUser:string = environment.changeUser;

  constructor(protected http: HttpClient) { }

  /**
   * @name listerUtilisateur
   * @description Permet de récup la liste de tous les utilisateurs
   */
  public listerUtilisateur(): Observable<User[]> {
    return this.http.get<User[]>(this.listUser).pipe();
  }

   /**
   * @name listerArticles
   * @description Permet de récup la liste de tous les utilisateurs
   */
  public listerArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.listArticles).pipe();
  }

  /**
   * @name ajouterArticle
   * @description Permet d'ajouter un article
   */
  public ajouterArticle(article:Article) : Observable<string>{
    return this.http.post<string>(this.addArticle,article);
  }

  /**
   * @name addUtilisateur
   * @description Permet d'ajouter un user
   */
  public addUtilisateur(user:User) : Observable<string>{
    return this.http.post<string>(this.addUser,user);
  }

  /**
   * @name changeUtilisateur
   * @description Permet de chnager lea liste des users
   */
  public changeUtilisateur(user:User) : Observable<string>{
    return this.http.put<string>(this.changeUser+"/"+user.id,user);
  }

  /**
   * @name removeUtilisateur
   * @description Permet de supprimer un user
   */
  public removeUtilisateur(idUser:string) : Observable<string>{
    const params:HttpParams = new HttpParams();
    params.append("id",idUser);
    //return this.http.delete<string>(this.removeUser,{ params } );

    return this.http.delete<string>(this.removeUser+"/"+idUser);
  }

}
