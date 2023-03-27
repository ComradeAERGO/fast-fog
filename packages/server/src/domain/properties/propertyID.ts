import { z } from "zod";

export const PropertyID = z.string();

export type PropertyID = z.infer<typeof PropertyID>;
