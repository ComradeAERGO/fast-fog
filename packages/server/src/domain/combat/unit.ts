import { z } from "zod";
import { UnitType } from "./unitType";
import { uuid } from "@supabase/supabase-js/dist/main/lib/helpers";

export const Unit = z.object({
  id: z.string().uuid(),
  type: UnitType
});

export type Unit = z.infer<typeof Unit>;

export function createUnit(type: UnitType): Unit {
  return { type, id: uuid() };
}