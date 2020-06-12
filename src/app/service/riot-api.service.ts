import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {

  private apikey = 'RGAPI-7d2a8b16-ad0a-4a83-ac74-50b77bc837c6';

  constructor(private http: HttpClient) {
  }

  /**
   * Return summoner informations
   */
  getSummonerInformations(name: string) {
    return this.http.get(`https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${this.apikey}`);
  }

  getTftInformations(encryptedSummonerId: string) {
    return this.http.get(`https://euw1.api.riotgames.com/tft/league/v1/entries/by-summoner/${encryptedSummonerId}?api_key=${this.apikey}`);
  }

  getMathInformations(puuid: string) {
    return this.http.get(`https://euw1.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?api_key=${this.apikey}`);
  }
}
