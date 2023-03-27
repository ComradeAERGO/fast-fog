import { z } from "zod";

export const PropertyName = z.string();

export type PropertyName = z.infer<typeof PropertyName>;
