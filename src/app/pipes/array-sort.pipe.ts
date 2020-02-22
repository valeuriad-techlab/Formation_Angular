import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySort'
})
export class ArraySortPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    return value.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }

}
