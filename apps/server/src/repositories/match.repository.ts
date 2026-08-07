import type { CreateMatch, GameResult } from "../entities/game-result";

export interface MatchRepository {
  create(data: CreateMatch): Promise<GameResult>;

  findByGame(
    gameId: string
  ): Promise<GameResult | null>;

  historyByUser(
    userId: string
  ): Promise<GameResult[]>;
}