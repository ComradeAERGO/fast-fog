import { z } from "zod";
import { Unit } from "./unit";


// ENTITY
export const Garrison = z.object({
  units: z.array(Unit)
})

export type Garrison = z.infer<typeof Garrison>;


export function addUnitToGarrison(garrison: Garrison, unit: Unit): void {
  garrison.units.push(unit);
}

export function removeUnitFromGarrison(
  garrison: Garrison,
  index: number
): void {
  garrison.units.splice(index, 1);
}
