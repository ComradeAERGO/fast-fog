import { Property } from "./property";

export interface IPropertyRepository {
  getById(id: string): Promise<Property | null>;
  create(property: Property): Promise<Property>;
  update(property: Property): Promise<Property>;
  delete(id: string): Promise<void>;
}
