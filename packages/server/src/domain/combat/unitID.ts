import { z } from "zod";

export const UnitID = z.string().uuid();

export type UnitID = z.infer<typeof UnitID>;
