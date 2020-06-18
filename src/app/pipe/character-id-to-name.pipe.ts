import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'characterIdToName'
})
export class CharacterIdToNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(5);
  }

}
