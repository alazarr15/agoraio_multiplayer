import type { Leaderboard, LeaderboardEntry } from "../entities/leaderboard";

export interface LeaderboardRepository {
  update(data: LeaderboardEntry): Promise<void>;

  top(limit: number): Promise<Leaderboard[]>;

  findByUser(
    userId: string
  ): Promise<Leaderboard | null>;
}