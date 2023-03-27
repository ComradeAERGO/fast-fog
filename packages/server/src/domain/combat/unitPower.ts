import { z } from "zod";

export const UnitPower = z.object({
  attack: z.number(),
  defense: z.number(),
});

export type UnitPower = z.infer<typeof UnitPower>;
