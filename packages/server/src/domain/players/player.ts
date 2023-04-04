import { z } from "zod";
import { PlayerID } from "./playerID";
import { PlayerName } from "./playerName";
import { PlayerColor } from "./playerColor";
import { uuid } from "@supabase/supabase-js/dist/main/lib/helpers";

// AGGREGATE
export const Player = z.object({
  id: PlayerID,
  name: PlayerName,
  createdAt: z.number(),
  color: PlayerColor,
  properties: z.array(z.string().uuid()),
  armyId: z.string().uuid(),
  resources: z.array(z.string().uuid()),
  position: z.object({
    x: z.number(),
    y: z.number()
  }),
});

export type Player = z.infer<typeof Player>;

export const createPlayer = (
  name: string,
  color: PlayerColor,
  armyId: string,
  resources: any
): Player => {
  const player = {
    id: uuid(),
    name,
    color,
    armyId,
    resources,
  };

  return Player.parse(player);
};
