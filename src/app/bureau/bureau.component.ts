import {Component, OnInit} from '@angular/core';
import {RiotApiService} from '../service/riot-api.service';
import {Summoner} from '../dto/summoner';
import {TftInformations} from '../dto/tft-informations';

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {
  summonerName = 'Forestator';

  summonerInformations: Summoner;

  tftInformations: TftInformations;

  matchsInformation: any;
  matchhistory: any;

  constructor(private riotApiService: RiotApiService) {
  }

  ngOnInit(): void {
  }

  getSummonerInfo() {
    this.riotApiService.getSummonerInformations(this.summonerName).subscribe((sumInfo: Summoner) => {
      this.summonerInformations = sumInfo;
    });
  }

  getTftInformations() {
    this.riotApiService.getTftInformations(this.summonerInformations.id).subscribe((rep: TftInformations) => {
      this.tftInformations = rep;
    });
  }

  getMatchesInformations() {
    this.riotApiService.getMathInformations(this.summonerInformations.puuid).subscribe((rep: any) => {
      this.matchhistory = rep;
    });
  }
}
