
export interface Leaderboard  {
    id: string;
    userId: string;
    highestScore: number;
    gamesWon: number;
  }


export interface LeaderboardEntry {
    userId: string;
    score: number;
  }
