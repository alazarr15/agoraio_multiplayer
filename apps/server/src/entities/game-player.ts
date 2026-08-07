export interface GamePlayer 
  {
    id: string;
    gameId: string;
    userId: string;
    finalMass: number;
    score: number;
    alive: boolean;
  }

  export interface JoinGame {
    gameId: string;
    userId: string;
  }

  export interface GamePlayer {
    id: string;
    gameId: string;
    userId: string;
    finalMass: number;
    score: number;
    alive: boolean;
  }
