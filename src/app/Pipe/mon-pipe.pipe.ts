import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monPipe'
})
export class MonPipePipe implements PipeTransform {

  transform(monTableau: Array<any>, field: string, fieldSecondaire: string): Array<any> {
    if (!Array.isArray(monTableau)) {
      return;
    }
    this.tri(monTableau, field);
    this.tri(monTableau, fieldSecondaire);
    return monTableau;
  }

  private tri(monTableau: Array<any>, field: string) {
    monTableau.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }


  /**transform(maValeur: string, search:string, replaceBy:string): string {
    return maValeur.replace(new RegExp(search, 'g'),replaceBy);
  }
  **/
}
