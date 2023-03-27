import { BoardCoordinates } from "./boardCoordinates";
import { z } from "zod";
import { Unit } from "./unit";

// ENTITY
export const Cell = z.object({
  coordinates: BoardCoordinates,
});

export type Cell = z.infer<typeof Cell>;

export const PropertyCell = z.object({
  ...Cell.shape,
  propertyID: z.string(),
});
export type PropertyCell = z.infer<typeof PropertyCell>;

export function createPropertyCell(
  coordinates: BoardCoordinates,
  propertyID: string,
  garrisonUnits: Unit[]
): PropertyCell {
  return { coordinates, propertyID };
}
