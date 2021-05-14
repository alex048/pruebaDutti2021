import { Starships } from './starships.module';

export interface StarshipsResponse {
  count: number;
  next: string;
  previous: null;
  results: Starships[];
}
