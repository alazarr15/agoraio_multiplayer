export interface room {
    roomId: string;
    name: string;
    maxPlayers: number;
    currentPlayers: number;
    started: boolean;
}