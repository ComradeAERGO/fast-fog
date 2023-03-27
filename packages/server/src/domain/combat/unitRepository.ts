import { Unit } from "./unit";

export interface IUnitRepository {
  getById(id: string): Promise<Unit | null>;
  create(unit: Unit): Promise<Unit>;
  update(unit: Unit): Promise<Unit>;
  delete(id: string): Promise<void>;
}
