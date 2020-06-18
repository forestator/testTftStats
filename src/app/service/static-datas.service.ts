import {Injectable} from '@angular/core';
import * as champions from '../../assets/set3Datas/champions.json';
import {Champion} from '../dto/champion';

@Injectable({
  providedIn: 'root'
})
export class StaticDatasService {

  championsList: Array<Champion> = (champions as any).default;

  constructor() {
  }
}
