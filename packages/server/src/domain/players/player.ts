import { z } from "zod";
import { Army } from "./army";
import { PlayerID } from "./playerID";
import { PlayerName } from "./playerName";
import { PlayerColor } from "./playerColor";

// AGGREGATE
export const Player = z.object({
  id: PlayerID,
  name: PlayerName,
  color: PlayerColor,
  army: Army,
});

export type Player = z.infer<typeof Player>;

export const createPlayer = (
  id: string,
  name: string,
  color: string,
  initialArmyUnits: Army
): Player => {
  const player = {
    id,
    name,
    color,
    army: initialArmyUnits,
  };

  return Player.parse(player);
};
