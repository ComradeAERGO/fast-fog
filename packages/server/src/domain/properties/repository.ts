import { Property } from "./property";

export interface IPropertyRepository {
  getById(id: string): Promise<Property | null>;
  create(property: Property): Promise<Property>;
  update(id: string, property: Partial<Property>): Promise<void>;
  delete(id: string): Promise<void>;
}
