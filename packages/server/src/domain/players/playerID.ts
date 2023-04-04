import { z } from "zod";

// VALUE OBJECT
export const PlayerID = z.string().uuid()

export type PlayerID = z.infer<typeof PlayerID>