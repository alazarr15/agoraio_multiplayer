import type { CreateGame, GameSession, GameStatus } from "../entities/game-session";

export interface GameRepository {
  create(data: CreateGame): Promise<GameSession>;

  findById(id: string): Promise<GameSession | null>;

  findWaitingGame(): Promise<GameSession | null>;

  updateStatus(
    id: string,
    status: GameStatus
  ): Promise<void>;

  finishGame(
    id: string,
    winnerId: string
  ): Promise<void>;
}