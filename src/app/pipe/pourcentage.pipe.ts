import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pourcentage'
})
export class PourcentagePipe implements PipeTransform {

  transform(value: number, args: number): string {
    return Math.floor(value * 100 / args) + '%';
  }

}
