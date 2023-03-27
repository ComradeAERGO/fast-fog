import { supabase } from "../../config/supabaseClient";
import { Resource } from "../../domain/resources/resource";
import { IResourceRepository } from "../../domain/resources/repository";

export class ResourceSupabaseAdapter implements IResourceRepository {
  private table = "resource";

  async getById(id: string): Promise<Resource | null> {
    const { data, error } = await supabase
      .from(this.table)
      .select()
      .eq("id", id)
      .single<Resource>();

    if (error) {
      throw error;
    }

    return data;
  }

  async create(resource: Resource): Promise<Resource> {
    const { data, error } = await supabase
      .from(this.table)
      .insert([resource])
      .single<Resource>();

    if (error) {
      throw error;
    }

    if (!data) {
      throw new Error("Failed to create property");
    }

    return data;
  }

  async update(id: string, resource: Partial<Resource>): Promise<void> {
    const { error } = await supabase
      .from(this.table)
      .update(resource)
      .eq("id", id)

    if (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from(this.table)
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }
  }
}