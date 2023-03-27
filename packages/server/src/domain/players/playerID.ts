import { z } from "zod";

export const PlayerID = z.string().uuid()

export type PlayerID = z.infer<typeof PlayerID>