import { z } from "zod";

export const PlayerColor = z.string().refine(isValidColor, {
  message: "Invalid color value.",
});

export type PlayerColor = z.infer<typeof PlayerColor>;

function isValidColor(color: string): boolean {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexColorRegex.test(color);
}
