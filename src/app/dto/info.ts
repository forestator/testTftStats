import {Participant} from './participant';

export interface Info {
  game_datetime: number;
  game_length: number;
  game_variation: string;
  game_version: string;
  participants: Participant[];
  queue_id: number;
  tft_set_number: number;
}
