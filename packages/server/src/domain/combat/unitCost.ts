import { z } from "zod";

export const UnitCost = z.object({
  infantry: z.number(),
  cavalry: z.number(),
  archer: z.number(),
  elite: z.number(),
});

export type UnitCost = z.infer<typeof UnitCost>;
