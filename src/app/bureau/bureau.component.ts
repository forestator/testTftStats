import {Component, OnInit} from '@angular/core';
import {RiotApiService} from '../service/riot-api.service';
import {Summoner} from '../dto/summoner';
import {TftInformations} from '../dto/tft-informations';
import {MatchInformation} from '../dto/match-information';

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {
  summonerName = 'Forestator';

  summonerInformations: Summoner;

  tftInformations: TftInformations;

  matchhistory: string[];

  matchInformation: MatchInformation;

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
    this.riotApiService.getMatchInformations(this.summonerInformations.puuid).subscribe((rep: string[]) => {
      this.matchhistory = rep;
    });
  }

  getMatchInformationById() {
    this.riotApiService.getMatchInformationById(this.matchhistory[0]).subscribe((rep: MatchInformation) => {
      this.matchInformation = rep;
    });
  }
}
