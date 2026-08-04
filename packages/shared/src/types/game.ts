import type { player} from "./player"
export interface GameState {
    players: player[];
    tick: number;
}