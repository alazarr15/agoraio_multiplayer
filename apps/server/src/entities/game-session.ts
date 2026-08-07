export interface GameSession {
    id: string;
    status: string;
    maxPlayers: number;
    startedAt: string | null;
    endedAt: string | null;
    createdAt: string;
}

export interface CreateGame {
    maxPlayers: number;
}

export interface GameStatus {
    status: string;
}