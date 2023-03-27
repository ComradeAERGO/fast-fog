import { z } from "zod";

// ENTITY
export const Unit = z.object({
  type: z.string(),
})

export type Unit = z.infer<typeof Unit>;

export const Army = z.object({
  units: z.array(Unit)
})

export type Army = z.infer<typeof Army>

export function createArmy(units: Unit[]): Army {
  return { units };
}

export function addUnit(army: Army, unit: Unit): void {
  army.units.push(unit);
}

export function removeUnit(army: Army, index: number): void {
  army.units.splice(index, 1);
}
