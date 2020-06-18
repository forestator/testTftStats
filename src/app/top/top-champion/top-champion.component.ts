import {Component, Input, OnInit} from '@angular/core';
import {Unit} from '../../dto/unit';

@Component({
  selector: 'app-top-champion',
  templateUrl: './top-champion.component.html',
  styleUrls: ['./top-champion.component.scss']
})
export class TopChampionComponent implements OnInit {

  @Input() topChampions: { unit: Unit; iteration: number }[];

  numberOfChampionsPlayed = 0;

  top3Champions: { unit: Unit; iteration: number }[];

  constructor() {
  }

  ngOnInit(): void {
    const topUnits = this.topChampions.sort((a: { unit: Unit; iteration: number }, b: { unit: Unit; iteration: number }) => {
      if (a.iteration < b.iteration) {
        return 1;
      } else if (a.iteration === b.iteration) {
        return 0;
      } else {
        return -1;
      }
    });
    topUnits.forEach(topUnit => this.numberOfChampionsPlayed = this.numberOfChampionsPlayed + topUnit.iteration);
    this.top3Champions = [topUnits[0], topUnits[1], topUnits[2], topUnits[3], topUnits[4]];
  }

}
