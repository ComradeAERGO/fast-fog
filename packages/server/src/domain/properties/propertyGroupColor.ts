import { z } from "zod";

export const PropertyGroupColor = z.enum([
  "red",
  "yellow",
  "green",
  "blue",
  "orange",
  "purple",
  "white",
  "black",
]);

export type PropertyGroupColor = z.infer<typeof PropertyGroupColor>;
