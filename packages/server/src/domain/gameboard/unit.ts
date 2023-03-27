import { z } from "zod";

export const Unit = z.object({
  type: z.string(),
});

export type Unit = z.infer<typeof Unit>;
