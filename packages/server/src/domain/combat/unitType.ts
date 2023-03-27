import { z } from "zod";

export const UnitType = z.enum(["infantry", "cavalry", "archer", "elite"]);

export type UnitType = z.infer<typeof UnitType>;
