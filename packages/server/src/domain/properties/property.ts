import { z } from "zod";
import { PropertyID } from "./propertyID";
import { PropertyName } from "./propertyName";
import { PropertyColor } from "./propertyColor";
import { uuid } from "@supabase/supabase-js/dist/main/lib/helpers";

// AGGREGATE
export const Property = z.object({
  id: PropertyID,
  name: PropertyName,
  color: PropertyColor,
});

export type Property = z.infer<typeof Property>;

export const createProperty = (name: PropertyName, color: PropertyColor) => {
  const property = {
    id: uuid(),
    name,
    color,
  };

  return Property.parse(property);
};
