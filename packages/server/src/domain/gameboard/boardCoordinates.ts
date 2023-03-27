import { z } from "zod";

// VALUE OBJECT
export const BoardCoordinates = z.object({
  x: z.number(),
  y: z.number()
})

export type BoardCoordinates = z.infer<typeof BoardCoordinates>;

export function createBoardCoordinates(x: number, y: number): BoardCoordinates {
  return { x, y };
}
