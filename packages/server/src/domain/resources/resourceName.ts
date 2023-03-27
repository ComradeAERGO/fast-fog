import { z } from "zod";

export const ResourceName = z.string();
export type ResourceName = z.infer<typeof ResourceName>;
