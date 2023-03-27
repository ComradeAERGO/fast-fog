import { GameBoard } from "./gameboard";

export interface IGameboardRepository {
  getById(id: string): Promise<GameBoard | null>;
  create(gameboard: GameBoard): Promise<GameBoard>;
  update(gameboard: GameBoard): Promise<GameBoard>;
  delete(id: string): Promise<void>;
}
