import { Army } from "./army";

export interface IArmyRepository {
  getById(id: string): Promise<Army | null>;
  create(army: Army): Promise<Army>;
  update(id: string, army: Army): Promise<void>;
  delete(id: string): Promise<void>;
}
