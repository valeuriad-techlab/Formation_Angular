import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coReplaceText'
})
export class CoReplaceTextPipe implements PipeTransform {

  transform(sourceText: string, serachText: string, replaceText: string): unknown {
    return sourceText.replace(new RegExp(serachText, 'g'), replaceText);
  }

}
