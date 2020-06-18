import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../../dto/participant';
import {Unit} from '../../dto/unit';

@Component({
  selector: 'app-top-comp',
  templateUrl: './top-comp.component.html',
  styleUrls: ['./top-comp.component.scss']
})
export class TopCompComponent implements OnInit {

  @Input() participants: Participant[];

  @Input() topPlacement: number;

  unitTop: Unit[];

  constructor() {
  }

  ngOnInit(): void {
    this.unitTop = this.participants.find(participant => participant.placement === this.topPlacement).units;
  }

}
