import { BoardCoordinates } from "./boardCoordinates";
import { Unit } from "../players/army";
import { z } from "zod";
import { Garrison } from "./garrison";

// ENTITY
export const Cell = z.object({
  coordinates: BoardCoordinates,
});

export type Cell = z.infer<typeof Cell>;

export const PropertyCell = z.object({
  ...Cell.shape,
  propertyID: z.string(),
  garrison: Garrison,
});
export type PropertyCell = z.infer<typeof PropertyCell>;

export const ResourceCell = z.object({
  ...Cell.shape,
  resourceID: z.string(),
});

export type ResourceCell = z.infer<typeof ResourceCell>;

export const EventCell = z.object({
  ...Cell.shape,
  eventID: z.string(),
});

export type EventCell = z.infer<typeof EventCell>;

export function createPropertyCell(
  coordinates: BoardCoordinates,
  propertyID: string,
  garrisonUnits: Unit[]
): PropertyCell {
  const garrison: Garrison = { units: garrisonUnits };
  return { coordinates, propertyID, garrison };
}

export function createResourceCell(
  coordinates: BoardCoordinates,
  resourceID: string
): ResourceCell {
  return { coordinates, resourceID };
}

export function createEventCell(
  coordinates: BoardCoordinates,
  eventID: string
): EventCell {
  return { coordinates, eventID };
}