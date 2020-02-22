import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSearch'
})
export class TextSearchPipe implements PipeTransform {

  transform(value: string, searchText: string, replaceText: string): string {
    
    return value.replace(new RegExp(searchText, 'gi'), replaceText);
  }

}
