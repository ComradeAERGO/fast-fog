import { z } from "zod";

export const ResourceType = z.enum([
  "water",
  "food",
  "gold",
  "iron",
  "wood",
])
export type ResourceType = z.infer<typeof ResourceType>;
