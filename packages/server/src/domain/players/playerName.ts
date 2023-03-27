import { z } from "zod";

export const PlayerName = z.string().min(3).max(24);

export type PlayerName = z.infer<typeof PlayerName>;