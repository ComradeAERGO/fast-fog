// VALUE OBJECT
import { PropertyGroupColor } from "./propertyGroupColor";
import { z } from "zod";
import { Property } from "./property";

export const PropertyGroup = z.object({
  name: z.string(),
  color: PropertyGroupColor,
  properties: z.array(Property),
});

export type PropertyGroup = z.infer<typeof PropertyGroup>;
