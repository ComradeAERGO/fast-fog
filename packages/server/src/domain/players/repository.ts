import { Player } from "./player";

export interface IPlayerRepository {
  getById(id: string): Promise<Player | null>;
  create(player: Player): Promise<Player>;
  update(player: Player): Promise<Player>;
  delete(id: string): Promise<void>;
}
