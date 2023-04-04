import { z } from "zod";

export const PropertyColor = z.enum([
  "White",
  "Brown",
  "Light Blue",
  "Pink",
  "Orange",
  "Red",
  "Yellow",
  "Green",
  "Dark Blue"
]);

export type PropertyColor = z.infer<typeof PropertyColor>;
