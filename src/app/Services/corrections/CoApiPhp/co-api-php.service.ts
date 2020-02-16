import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/corrections/user';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoApiPhpService {

  private listUser:string = environment.listUser;
  private addUser:string = environment.addUser;
  private removeUser:string = environment.removeUser;
  private changeUser:string = environment.changeUser;

  constructor(protected http: HttpClient) { }

  /**
   * @name getListUsers
   * @description Permet de récup la liste de tous les utilisateurs
   */
  public listerUtilisateur(): Observable<User[]> {
    return this.http.get<User[]>(this.listUser).pipe(
    );
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
  public changeUtilisateur() : Observable<string>{
    return this.http.put<string>(this.changeUser,null);
  }

  /**
   * @name removeUtilisateur
   * @description Permet de supprimer un user
   */
  public removeUtilisateur() : Observable<string>{
    return this.http.delete<string>(this.removeUser);
  }

}
