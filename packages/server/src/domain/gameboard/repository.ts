import { GameBoard } from "./gameboard";

export interface IGameboardRepository {
  getById(id: string): Promise<GameBoard | null>;
  create(gameboard: GameBoard): Promise<GameBoard>;
  update(id: string, gameboard: GameBoard): Promise<void>;
  delete(id: string): Promise<void>;
}
