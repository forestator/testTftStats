import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {

  private apikey = 'RGAPI-275fdb89-c1c7-4e95-8dd9-71e6c912ca4e';

  constructor(private http: HttpClient) {
  }

  /**
   * Return summoner informations
   */
  getSummonerInformations(name: string) {
    return this.http.get(`/tft/summoner/v1/summoners/by-name/${name}?api_key=${this.apikey}`);
  }

  getTftInformations(encryptedSummonerId: string) {
    return this.http.get(`/tft/league/v1/entries/by-summoner/${encryptedSummonerId}?api_key=${this.apikey}`);
  }

  getMatchInformations(puuid: string) {
    return this.http.get(`/tft/match/v1/matches/by-puuid/${puuid}/ids?count=20&api_key=${this.apikey}`);
  }

  getMatchInformationById(idMatch: string) {
    return this.http.get(`/tft/match/v1/matches/${idMatch}?api_key=${this.apikey}`);
  }
}
