import { StarshipsState } from './models/Starships-state'

export interface AppState {
  readonly ships: StarshipsState;
}
