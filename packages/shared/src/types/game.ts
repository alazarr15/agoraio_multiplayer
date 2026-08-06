import type { player} from "./player"
import type { pellet} from "./pellets"
import type { virus } from "./virus"

export interface GameState {
    players: player[];
    pellets: pellet[];
    viruses: virus[];
    tick: number;
    started: boolean;  
}