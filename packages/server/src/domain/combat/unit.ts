import { z } from "zod";
import { UnitType } from "./unitType";

export const Unit = z.object({
  id: z.string(),
  type: UnitType
});

export type Unit = z.infer<typeof Unit>;
