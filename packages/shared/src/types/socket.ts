import type { GameState} from './game';
import type { LeaderboardEntry } from './leaderboard';
import type { vector2 } from './common';

export interface joinGamePayload {
    username: string;
}

export interface movePayload {
    direction: vector2;
}

export interface splitPayload {}

export interface ejectPayload {}

export interface gameStatePayload {
     gamestate : GameState;
}

export interface leaderboardPayload {
    leaderboard: LeaderboardEntry[];    
}



/*
clien -> server

join 
move
split
eject

server -> client
gamestate
leaderboard


*/