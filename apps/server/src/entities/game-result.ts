export interface GameResult {
    id: string;
    gameId: string;
    winnerId: string;
    score: number;
}

export interface CreateMatch {
    gameId: string;
    winnerId: string;
    score: number;
}