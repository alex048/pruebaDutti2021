import { StarshipsResponse } from './starships-response';

export interface StarshipsState {
  shipsResponse: StarshipsResponse;
  currentPage: number;
}
