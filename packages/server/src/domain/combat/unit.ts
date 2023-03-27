import { z } from "zod";
import { UnitType } from "./unitType";
import { UnitPower } from "./unitPower";

export const Unit = z.object({
  id: z.string(),
  type: UnitType,
  power: UnitPower,
});

export type Unit = z.infer<typeof Unit>;
