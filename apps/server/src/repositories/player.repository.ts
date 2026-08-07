import type { JoinGame, GamePlayer } from "../entities/game-player";

export interface PlayerRepository {
  joinGame(data: JoinGame): Promise<GamePlayer>;

  leaveGame(
    gameId: string,
    userId: string
  ): Promise<void>;

  findByGame(
    gameId: string
  ): Promise<GamePlayer[]>;

  updateFinalScore(
    playerId: string,
    score: number
  ): Promise<void>;

  updateFinalMass(
    playerId: string,
    mass: number
  ): Promise<void>;
}