import { z } from "zod";
import { ResourceID } from "./resourceID";
import { ResourceType } from "./resourceType";

// AGGREGATE
export const Resource = z.object({
  id: ResourceID,
  type: ResourceType,
  quantity: z.number(),
})

export type Resource = z.infer<typeof Resource>;

export function createResource(
  id: string,
  type: ResourceType,
  quantity: number
): Resource {
  return { id, type, quantity };
}
