import { Resource } from "./resource";

export interface IResourceRepository {
  getById(id: string): Promise<Resource | null>;
  create(resource: Resource): Promise<Resource>;
  update(resource: Resource): Promise<Resource>;
  delete(id: string): Promise<void>;
}
