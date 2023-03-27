import { z } from "zod";
import { ResourceID } from "./resourceID";
import { ResourceName } from "./resourceName";
import { ResourceType } from "./resourceType";

export const Resource = z.object({
  id: ResourceID,
  name: ResourceName,
  type: ResourceType,
})

export type Resource = z.infer<typeof Resource>;

export function createResource(
  id: string,
  name: string,
  type: ResourceType
): Resource {
  return { id, name, type };
}
