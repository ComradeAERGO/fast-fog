import { Player } from "./player";

export interface IPlayerRepository {
  getById(id: string): Promise<Player | null>;
  create(player: Player): Promise<Player>;
  update(id: string, player: Player): Promise<void>;
  delete(id: string): Promise<void>;
}
