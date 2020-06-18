import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'unixToDate'
})
export class UnixToDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return moment(value).format('DD/MM/YYYY HH:mm');
  }

}
