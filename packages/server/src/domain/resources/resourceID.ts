import { z } from "zod";

export const ResourceID = z.string();
export type ResourceID = z.infer<typeof ResourceID>;
