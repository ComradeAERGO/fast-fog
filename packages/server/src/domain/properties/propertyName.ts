import { z } from "zod";

export const PropertyName = z.enum([
  "Start",
  "Shadowy Forest Path",
  "Misty Hollow Trail",
  "Silverleaf Glade",
  "Soaring Heights Passage",
  "Serpent's Spine Path",
  "Sunset Promenade",
  "Ivory Citadel",
  "Dawnstar Way",
  "Arcane Archway",
  "Enchanted Grove",
  "Whispering Winds Avenue",
  "Emberstone Street",
  "Wyrmfire Boulevard",
  "Dragon's Roost Plaza",
  "Celestial Plaza",
  "Starfall Promenade",
  "Astral Crescent",
  "Regal Gardens",
  "Mage's Walk",
  "Enchanter's Avenue",
  "Elysian Fields",
  "Sovereign's Sanctuary"
]);

export type PropertyName = z.infer<typeof PropertyName>;
