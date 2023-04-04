import { z } from "zod";
import { uuid } from "@supabase/supabase-js/dist/main/lib/helpers";
import { Unit } from "./unit";

// ENTITY
export const Army = z.object({
  id: z.string().uuid(),
  units: z.array(Unit)
});

export type Army = z.infer<typeof Army>

export function createArmy(units: Unit[]): Army {
  return { id: uuid(), units };
}

export function addUnit(army: Army, unit: Unit): void {
  army.units.push(unit);
}

export function removeUnit(army: Army, index: number): void {
  army.units.splice(index, 1);
}
