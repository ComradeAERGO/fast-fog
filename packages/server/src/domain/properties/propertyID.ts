import { z } from "zod";

export const PropertyID = z.string().uuid();

export type PropertyID = z.infer<typeof PropertyID>;
