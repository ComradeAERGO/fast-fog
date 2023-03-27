import { Unit } from "./unit";

export interface IUnitRepository {
  getById(id: string): Promise<Unit | null>;
  create(unit: Unit): Promise<Unit>;
  update(id: string, unit: Unit): Promise<void>;
  delete(id: string): Promise<void>;
}
