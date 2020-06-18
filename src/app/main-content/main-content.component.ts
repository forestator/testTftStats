import {Component, OnInit} from '@angular/core';
import {Summoner} from '../dto/summoner';
import {RiotApiService} from '../service/riot-api.service';
import {debounceTime} from 'rxjs/operators';
import {TftInformations} from '../dto/tft-informations';
import {MatchInformation} from '../dto/match-information';
import {MatTableDataSource} from '@angular/material/table';
import {Unit} from '../dto/unit';
import {StaticDatasService} from '../service/static-datas.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  summonerName = 'Forestator';

  summonerInformations: Summoner;

  tftInformations: TftInformations;

  summonerMatchHistory: string[];

  matchInformations: MatchInformation[] = [];

  dataSource: MatTableDataSource<MatchInformation>;

  displayedColumns = ['gameDateTime', 'top1Comp', 'top2Comp', 'top3Comp'];

  topUnits: { unit: Unit, iteration: number }[] = [];

  constructor(private riotApiService: RiotApiService, private staticDatasService: StaticDatasService) {
  }

  ngOnInit(): void {
  }

  searchSummoner() {
    if (this.summonerMatchHistory) {
      this.resetValues();
    }

    this.riotApiService.getSummonerInformations(this.summonerName).pipe(debounceTime(1000)).subscribe((sumInfo: Summoner) => {
      this.summonerInformations = sumInfo;
      this.riotApiService.getTftInformations(sumInfo.id).subscribe((tftSummonerInformations: TftInformations) => {
        this.tftInformations = tftSummonerInformations;
        this.riotApiService.getMatchInformations(this.summonerInformations.puuid).subscribe((rep: string[]) => {
          this.summonerMatchHistory = rep;
          this.summonerMatchHistory.forEach(match => this.getMatchInformation(match));
        });
      });
    });
  }

  getMatchInformation(matchId: string) {
    this.riotApiService.getMatchInformationById(matchId).subscribe((rep: MatchInformation) => {
      this.matchInformations.push(rep);
      this.dataSource = new MatTableDataSource<MatchInformation>(this.matchInformations);

      if (this.matchInformations.length === 19) {
        this.matchInformations.forEach(match => {
          const participantsTop3 = match.info.participants
            .filter(participant => participant.placement === 1 || participant.placement === 2 || participant.placement === 3);
          const units: Unit[] = [];
          participantsTop3.forEach(participant => {
            units.push(...participant.units);
          });
          units.forEach(unit => {
            const uniteTrouve = this.topUnits.find(unitt => unitt.unit.character_id === unit.character_id);
            if (uniteTrouve) {
              uniteTrouve.iteration++;
            } else {
              this.topUnits.push({unit, iteration: 1});
            }
          });
        });
      }
    });
  }

  private resetValues() {
    this.summonerInformations = null;
    this.tftInformations = null;
    this.summonerMatchHistory = null;
    this.matchInformations = [];
    this.dataSource = null;
    this.topUnits = [];
  }
}
