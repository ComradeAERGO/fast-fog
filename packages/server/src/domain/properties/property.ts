import { z } from "zod";
import { Garrison } from "./garrison";
import { PropertyID } from "./propertyID";
import { PropertyName } from "./propertyName";

// AGGREGATE
export const Property = z.object({
  id: PropertyID,
  name: PropertyName,
  garrison: Garrison,
});

export type Property = z.infer<typeof Property>;

export const createProperty = (
  id: string,
  name: string,
  garrison: Garrison
) => {
  const property = {
    id,
    name,
    garrison,
  };

  return Property.parse(property);
};
