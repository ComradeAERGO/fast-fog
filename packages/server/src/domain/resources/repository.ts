import { Resource } from "./resource";

export interface IResourceRepository {
  getById(id: string): Promise<Resource | null>;
  create(resource: Resource): Promise<Resource>;
  update(id: string, resource: Partial<Resource>): Promise<void>;
  delete(id: string): Promise<void>;
}
